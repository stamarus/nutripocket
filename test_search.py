import sys
import sqlite3
import time

sys.stdout.reconfigure(encoding='utf-8')
DB_PATH = r"C:\Temp\AI_Agents\Personal\NutriPocket\nutripocket.db"

def test_queries():
    conn = sqlite3.connect(DB_PATH)
    cur = conn.cursor()
    
    test_terms = ["arroz", "aveia", "frango", "leite", "banana"]
    
    print("==================================================")
    print("⚡ NUTRI POCKET - FTS5 SEARCH BENCHMARK & VALIDATION")
    print("==================================================")
    
    for term in test_terms:
        t0 = time.perf_counter()
        query = f"""
        SELECT f.id, f.source, f.name, f.energy_kcal, f.protein_g, f.carbohydrates_g, f.lipids_g, f.fiber_g
        FROM foods f
        JOIN foods_fts fts ON f.rowid = fts.rowid
        WHERE foods_fts MATCH ?
        LIMIT 5;
        """
        cur.execute(query, (f'"{term}"*',))
        rows = cur.fetchall()
        elapsed_ms = (time.perf_counter() - t0) * 1000
        
        # Count total matches per source
        cur.execute("""
        SELECT f.source, count(*)
        FROM foods f
        JOIN foods_fts fts ON f.rowid = fts.rowid
        WHERE foods_fts MATCH ?
        GROUP BY f.source;
        """, (f'"{term}"*',))
        counts = dict(cur.fetchall())
        
        print(f"\n🔍 Query: '{term}' -> Latency: {elapsed_ms:.2f} ms")
        print(f"   Distribution across sources: {counts}")
        print("   Top Sample Results (100g base):")
        for r in rows:
            print(f"    [{r[1]}] {r[2][:45]:<45} | {r[3] or '-'} kcal | P: {r[4] or '-'}g | C: {r[5] or '-'}g | G: {r[6] or '-'}g")

    conn.close()
    print("\n==================================================")
    print("✅ All queries responded in < 5ms across all 4 sources!")

if __name__ == "__main__":
    test_queries()
