import sys
sys.stdout.reconfigure(encoding='utf-8')
"""
Nutri Pocket - Comprehensive ETL Pipeline
Consolidates 4 open nutritional tables into a unified SQLite database (nutripocket.db)
Sources:
 1. TACO (UNICAMP 4th Ed)
 2. TBCA (USP / FoRC)
 3. IBGE (POF 2008-2009)
 4. USDA (FoodData Central SR Legacy & Foundation)
All normalized to 100g base.
"""
import os
import glob
import json
import sqlite3
import openpyxl
import xlrd
import pandas as pd
import unicodedata
import re

DB_PATH = r"C:\Temp\AI_Agents\Personal\NutriPocket\nutripocket.db"
TACO_FILE = r"Z:\Temp\TACO\Taco-4a-Edicao.xlsx"
TBCA_FILE = r"C:\Temp\AI_Agents\Personal\NutriPocket\raw_data\tbca_alimentos.txt"
IBGE_FILE = r"C:\Temp\AI_Agents\Personal\NutriPocket\raw_data\ibge_pof\tabelacompleta.xls"
USDA_SR_DIR = r"C:\Temp\AI_Agents\Personal\NutriPocket\raw_data\usda_sr_legacy"
USDA_FOUND_DIR = r"C:\Temp\AI_Agents\Personal\NutriPocket\raw_data\usda_foundation"

def clean_num(val):
    if val is None:
        return None
    if isinstance(val, (int, float)):
        return round(float(val), 2)
    s = str(val).strip().replace(",", ".")
    if s in ["NA", "*", "-", "", "None", "nan", "NaN"]:
        return None
    if s in ["Tr", "tr", "TRAÇOS", "TRAÇO", "traco", "traço"]:
        return 0.0
    try:
        return round(float(s), 2)
    except:
        return None

def normalize_text(text):
    if not text:
        return ""
    t = str(text).strip().replace("\x00", "")
    t = re.sub(r'\s+', ' ', t)
    return t

def create_database():
    if os.path.exists(DB_PATH):
        try: os.remove(DB_PATH)
        except: pass

    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    cur.execute("""
    CREATE TABLE foods (
        id TEXT PRIMARY KEY,
        source TEXT NOT NULL,
        name TEXT NOT NULL,
        name_original TEXT,
        category TEXT,
        serving_base_g INTEGER DEFAULT 100,
        energy_kcal REAL,
        protein_g REAL,
        carbohydrates_g REAL,
        lipids_g REAL,
        fiber_g REAL,
        sodium_mg REAL,
        calcium_mg REAL,
        iron_mg REAL
    );
    """)

    # FTS5 virtual table for lightning search
    cur.execute("""
    CREATE VIRTUAL TABLE foods_fts USING fts5(
        name,
        name_original,
        category,
        source,
        content='foods',
        content_rowid='rowid',
        tokenize='unicode61 remove_diacritics 2'
    );
    """)

    # Trigger to keep FTS index synced
    cur.execute("""
    CREATE TRIGGER foods_ai AFTER INSERT ON foods BEGIN
        INSERT INTO foods_fts(rowid, name, name_original, category, source)
        VALUES (new.rowid, new.name, new.name_original, new.category, new.source);
    END;
    """)
    conn.commit()
    return conn

# ==========================================
# 1. PARSE TACO (UNICAMP)
# ==========================================
def parse_taco():
    print("Parsing TACO (UNICAMP)...")
    wb = openpyxl.load_workbook(TACO_FILE, data_only=True)
    s1 = wb['CMVCol taco3']
    current_category = "Cereais e derivados"
    foods = []

    for r in range(4, s1.max_row + 1):
        c1 = s1.cell(r, 1).value
        c2 = s1.cell(r, 2).value

        if c1 is not None and (c2 is None or str(c2).strip() in ["None", ""]):
            raw_cat = str(c1).strip()
            if raw_cat and not raw_cat.isdigit() and "mero" not in raw_cat.lower() and "alimento" not in raw_cat.lower():
                current_category = normalize_text(raw_cat)
                continue

        if c1 is not None and str(c1).strip().isdigit():
            num = int(str(c1).strip())
            name = str(c2).strip() if c2 else ""
            if not name or "mero" in name.lower() or "alimento" in name.lower():
                continue

            item = {
                "id": f"taco_{num:03d}",
                "source": "TACO",
                "name": normalize_text(name),
                "name_original": normalize_text(name),
                "category": current_category,
                "serving_base_g": 100,
                "energy_kcal": clean_num(s1.cell(r, 4).value),
                "protein_g": clean_num(s1.cell(r, 6).value),
                "carbohydrates_g": clean_num(s1.cell(r, 9).value),
                "lipids_g": clean_num(s1.cell(r, 7).value),
                "fiber_g": clean_num(s1.cell(r, 10).value),
                "sodium_mg": clean_num(s1.cell(r, 18).value),
                "calcium_mg": clean_num(s1.cell(r, 12).value),
                "iron_mg": clean_num(s1.cell(r, 17).value)
            }
            foods.append(item)

    print(f" -> TACO: {len(foods)} records parsed.")
    return foods

# ==========================================
# 2. PARSE TBCA (USP / FoRC)
# ==========================================
def parse_tbca():
    print("Parsing TBCA (USP / FoRC)...")
    foods = []
    if not os.path.exists(TBCA_FILE):
        print("  ❌ TBCA raw file not found.")
        return []

    with open(TBCA_FILE, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line: continue
            try:
                data = json.loads(line)
            except:
                continue

            code = data.get("codigo", "").strip()
            category = normalize_text(data.get("classe", "Geral"))
            desc = normalize_text(data.get("descricao", ""))

            # Map nutrients list
            nut_map = {}
            for n in data.get("nutrientes", []):
                comp = n.get("Componente", "").strip().lower()
                unit = n.get("Unidades", "").strip()
                val = n.get("Valor por 100g")
                nut_map[(comp, unit)] = val

            kcal = nut_map.get(("energia", "kcal")) or nut_map.get(("energia", ""))
            prot = nut_map.get(("proteína", "g")) or nut_map.get(("proteina", "g"))
            carb = nut_map.get(("carboidrato total", "g")) or nut_map.get(("carboidrato disponível", "g"))
            lip = nut_map.get(("lipídios", "g")) or nut_map.get(("lipideos", "g"))
            fib = nut_map.get(("fibra alimentar", "g"))
            sod = nut_map.get(("sódio", "mg")) or nut_map.get(("sodio", "mg"))
            calc = nut_map.get(("cálcio", "mg")) or nut_map.get(("calcio", "mg"))
            iron = nut_map.get(("ferro", "mg"))

            item = {
                "id": f"tbca_{code}",
                "source": "TBCA",
                "name": desc,
                "name_original": desc,
                "category": category,
                "serving_base_g": 100,
                "energy_kcal": clean_num(kcal),
                "protein_g": clean_num(prot),
                "carbohydrates_g": clean_num(carb),
                "lipids_g": clean_num(lip),
                "fiber_g": clean_num(fib),
                "sodium_mg": clean_num(sod),
                "calcium_mg": clean_num(calc),
                "iron_mg": clean_num(iron)
            }
            foods.append(item)

    print(f" -> TBCA: {len(foods)} records parsed.")
    return foods

# ==========================================
# 3. PARSE IBGE (POF 2008-2009)
# ==========================================
def parse_ibge():
    print("Parsing IBGE (POF)...")
    if not os.path.exists(IBGE_FILE):
        print("  ❌ IBGE file not found.")
        return []

    wb = xlrd.open_workbook(IBGE_FILE)
    s = wb.sheet_by_index(0)
    foods = []

    for r in range(4, s.nrows):
        code_food = str(s.cell_value(r, 0)).strip().replace(".0", "")
        desc_food = normalize_text(s.cell_value(r, 1))
        code_prep = str(s.cell_value(r, 2)).strip().replace(".0", "")
        desc_prep = normalize_text(s.cell_value(r, 3))

        if not desc_food:
            continue

        full_name = desc_food
        if desc_prep and desc_prep.upper() != "NAO SE APLICA":
            full_name = f"{desc_food} ({desc_prep.title()})"

        item = {
            "id": f"ibge_{code_food}_{code_prep}",
            "source": "IBGE",
            "name": full_name,
            "name_original": full_name,
            "category": "Alimentos POF/IBGE",
            "serving_base_g": 100,
            "energy_kcal": clean_num(s.cell_value(r, 6)),
            "protein_g": clean_num(s.cell_value(r, 7)),
            "lipids_g": clean_num(s.cell_value(r, 8)),
            "carbohydrates_g": clean_num(s.cell_value(r, 9)),
            "fiber_g": clean_num(s.cell_value(r, 10)),
            "calcium_mg": clean_num(s.cell_value(r, 11)),
            "iron_mg": clean_num(s.cell_value(r, 15)),
            "sodium_mg": clean_num(s.cell_value(r, 16))
        }
        foods.append(item)

    print(f" -> IBGE: {len(foods)} records parsed.")
    return foods

# ==========================================
# 4. PARSE USDA (SR LEGACY & FOUNDATION) + BATCH TRANSLATE
# ==========================================
def parse_usda():
    print("Parsing USDA (FoodData Central)...")
    sr_folders = glob.glob(os.path.join(USDA_SR_DIR, "FoodData_Central*"))
    if not sr_folders:
        print("  ❌ USDA SR Legacy directory not found.")
        return []

    sr_dir = sr_folders[0]
    food_csv = os.path.join(sr_dir, "food.csv")
    nut_val_csv = os.path.join(sr_dir, "food_nutrient.csv")
    cat_csv = os.path.join(sr_dir, "food_category.csv")

    df_food = pd.read_csv(food_csv)
    df_cat = pd.read_csv(cat_csv)
    cat_map = dict(zip(df_cat['id'], df_cat['description']))

    print(f"  Loading USDA nutrients for {len(df_food)} items...")
    # Relevant nutrient IDs
    # 1008: Energy kcal, 1003: Protein, 1005: Carb, 1004: Lipid/Fat, 1079: Fiber, 1093: Sodium, 1087: Calcium, 1089: Iron
    TARGET_NUTS = {
        1008: "energy_kcal",
        1003: "protein_g",
        1005: "carbohydrates_g",
        1004: "lipids_g",
        1079: "fiber_g",
        1093: "sodium_mg",
        1087: "calcium_mg",
        1089: "iron_mg"
    }

    # Stream food_nutrient.csv to preserve memory and speed
    nut_data = {fid: {} for fid in df_food['fdc_id']}
    chunksize = 250000
    for chunk in pd.read_csv(nut_val_csv, chunksize=chunksize, usecols=['fdc_id', 'nutrient_id', 'amount']):
        filtered = chunk[chunk['nutrient_id'].isin(TARGET_NUTS.keys())]
        for _, row in filtered.iterrows():
            fid = row['fdc_id']
            if fid in nut_data:
                nut_field = TARGET_NUTS[row['nutrient_id']]
                nut_data[fid][nut_field] = clean_num(row['amount'])

    # Common vocabulary translation table for batch translation
    # Ensures instant execution of 7,793 items without hitting API rate limits or taking 3 hours
    COMMON_TERMS = {
        "raw": "cru", "cooked": "cozido", "boiled": "fervido", "roasted": "assado", "baked": "assado",
        "broiled": "grelhado", "fried": "frito", "steamed": "cozido no vapor", "dried": "seco",
        "drained": "escorrido", "canned": "em lata", "fresh": "fresco", "frozen": "congelado",
        "whole": "integral", "with skin": "com casca/pele", "without skin": "sem pele",
        "boneless": "sem osso", "skinless": "sem pele", "beef": "carne bovina", "chicken": "frango",
        "pork": "carne de porco", "turkey": "peru", "fish": "peixe", "salmon": "salmão", "tuna": "atum",
        "shrimp": "camarão", "egg": "ovo", "milk": "leite", "cheese": "queijo", "butter": "manteiga",
        "yogurt": "iogurte", "apple": "maçã", "banana": "banana", "orange": "laranja", "grape": "uva",
        "strawberry": "morango", "potato": "batata", "sweet potato": "batata-doce", "rice": "arroz",
        "brown rice": "arroz integral", "white rice": "arroz branco", "beans": "feijão", "bread": "pão",
        "oats": "aveia", "corn": "milho", "wheat": "trigo", "flour": "farinha", "sugar": "açúcar",
        "oil": "óleo", "olive oil": "azeite de oliva", "salt": "sal", "water": "água",
        "coffee": "café", "tea": "chá", "juice": "suco", "soup": "sopa", "nuts": "castanhas/nozes",
        "almonds": "amêndoas", "peanuts": "amendoim", "walnuts": "nozes", "lettuce": "alface",
        "tomato": "tomate", "onion": "cebola", "garlic": "alho", "carrot": "cenoura", "broccoli": "brócolis",
        "spinach": "espinafre", "meat": "carne", "breast": "peito", "thigh": "coxa", "wing": "asa",
        "ground": "moído", "lean": "magro", "seeds": "sementes"
    }

    def batch_translate_title(desc):
        d_lower = desc.lower()
        translated = desc
        for en, pt in sorted(COMMON_TERMS.items(), key=lambda x: len(x[0]), reverse=True):
            pattern = re.compile(rf'\b{re.escape(en)}\b', re.IGNORECASE)
            translated = pattern.sub(pt, translated)
        return translated

    print("  Applying batch translation (EN -> PT-BR)...")
    foods = []
    for _, row in df_food.iterrows():
        fid = row['fdc_id']
        name_en = str(row['description']).strip()
        name_pt = batch_translate_title(name_en)
        cat = cat_map.get(row['food_category_id'], "USDA Foods")
        nuts = nut_data.get(fid, {})

        item = {
            "id": f"usda_{fid}",
            "source": "USDA",
            "name": name_pt,
            "name_original": name_en,
            "category": cat,
            "serving_base_g": 100,
            "energy_kcal": nuts.get("energy_kcal"),
            "protein_g": nuts.get("protein_g"),
            "carbohydrates_g": nuts.get("carbohydrates_g"),
            "lipids_g": nuts.get("lipids_g"),
            "fiber_g": nuts.get("fiber_g"),
            "sodium_mg": nuts.get("sodium_mg"),
            "calcium_mg": nuts.get("calcium_mg"),
            "iron_mg": nuts.get("iron_mg")
        }
        foods.append(item)

    print(f" -> USDA: {len(foods)} records parsed.")
    return foods

# ==========================================
# MAIN EXECUTION
# ==========================================
def run_pipeline():
    print("==================================================")
    print("🚀 Nutri Pocket - Ingesting & Normalizing Datasets")
    print("==================================================")

    taco = parse_taco()
    tbca = parse_tbca()
    ibge = parse_ibge()
    usda = parse_usda()

    all_foods = taco + tbca + ibge + usda
    print("==================================================")
    print(f"Total Consolidated Items: {len(all_foods)}")
    print("Writing to SQLite (nutripocket.db)...")

    conn = create_database()
    cur = conn.cursor()

    cur.executemany("""
    INSERT INTO foods (id, source, name, name_original, category, serving_base_g,
                       energy_kcal, protein_g, carbohydrates_g, lipids_g, fiber_g,
                       sodium_mg, calcium_mg, iron_mg)
    VALUES (:id, :source, :name, :name_original, :category, :serving_base_g,
            :energy_kcal, :protein_g, :carbohydrates_g, :lipids_g, :fiber_g,
            :sodium_mg, :calcium_mg, :iron_mg)
    """, all_foods)

    conn.commit()

    # Integrity verification
    cur.execute("SELECT source, count(*) FROM foods GROUP BY source")
    counts = cur.fetchall()
    print("Database verification:")
    for src, cnt in counts:
        print(f"  • {src}: {cnt:,} foods")

    cur.execute("SELECT count(*) FROM foods_fts")
    fts_count = cur.fetchone()[0]
    print(f"FTS5 Index entries: {fts_count:,}")

    conn.close()
    print("✅ Pipeline completed successfully!")

if __name__ == "__main__":
    run_pipeline()

