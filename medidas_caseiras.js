// Tabela Oficial de Medidas Caseiras para Avaliação do Consumo Alimentar (Pinheiro et al.)
// Sanitizado e estruturado com nomes amigáveis em português
const MEDIDAS_CASEIRAS_DATA = {
  "alimentos": {
    "ABACAXI": [
      {
        "measure": "Fatia grande",
        "grams": 190.0,
        "label": "Fatia grande (190g)"
      },
      {
        "measure": "Fatia média",
        "grams": 75.0,
        "label": "Fatia média (75g)"
      },
      {
        "measure": "Fatia pequena",
        "grams": 50.0,
        "label": "Fatia pequena (50g)"
      },
      {
        "measure": "Unidade média",
        "grams": 750.0,
        "label": "Unidade média (750g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 480.0,
        "label": "Unidade pequena (480g)"
      }
    ],
    "ABACAXI EM CALDA": [
      {
        "measure": "Fatia média",
        "grams": 64.0,
        "label": "Fatia média (64g)"
      },
      {
        "measure": "Fatia pequena",
        "grams": 30.0,
        "label": "Fatia pequena (30g)"
      }
    ],
    "BOBORA COZIDA": [
      {
        "measure": "Colher de sopa cháeia picado(a)",
        "grams": 25.0,
        "label": "Colher de sopa cháeia picado(a) (25g)"
      },
      {
        "measure": "Colher de sopa rasa picado(a)",
        "grams": 16.0,
        "label": "Colher de sopa rasa picado(a) (16g)"
      }
    ],
    "ESC M CH PICADA": [
      {
        "measure": "Escumadeira média rasa picado(a)",
        "grams": 70.0,
        "label": "Escumadeira média rasa picado(a) (70g)"
      },
      {
        "measure": "Pedaço médio",
        "grams": 50.0,
        "label": "Pedaço médio (50g)"
      },
      {
        "measure": "Pedaço pequeno",
        "grams": 30.0,
        "label": "Pedaço pequeno (30g)"
      },
      {
        "measure": "Colher de sopa cháeia picado(a)",
        "grams": 30.0,
        "label": "Colher de sopa cháeia picado(a) (30g)"
      },
      {
        "measure": "Colher de sopa rasa picado(a)",
        "grams": 20.0,
        "label": "Colher de sopa rasa picado(a) (20g)"
      },
      {
        "measure": "Escumadeira média cháeia picado(a)",
        "grams": 105.0,
        "label": "Escumadeira média cháeia picado(a) (105g)"
      },
      {
        "measure": "Colher de arroz cháeia picado(a)",
        "grams": 70.0,
        "label": "Colher de arroz cháeia picado(a) (70g)"
      },
      {
        "measure": "Colher de arroz rasa picado(a)",
        "grams": 35.0,
        "label": "Colher de arroz rasa picado(a) (35g)"
      }
    ],
    "ABOBRINHAREFOGADA": [
      {
        "measure": "Colher de arroz cháeia picado(a)",
        "grams": 70.0,
        "label": "Colher de arroz cháeia picado(a) (70g)"
      },
      {
        "measure": "Colher de arroz rasa picado(a)",
        "grams": 35.0,
        "label": "Colher de arroz rasa picado(a) (35g)"
      },
      {
        "measure": "Colher de sopa cháeia picado(a)",
        "grams": 30.0,
        "label": "Colher de sopa cháeia picado(a) (30g)"
      },
      {
        "measure": "Colsrpicada",
        "grams": 20.0,
        "label": "Colsrpicada (20g)"
      },
      {
        "measure": "Escumadeira média rasa picado(a)",
        "grams": 40.0,
        "label": "Escumadeira média rasa picado(a) (40g)"
      }
    ],
    "ACELGA": [
      {
        "measure": "Colher de arroz cháeia picado(a)",
        "grams": 10.0,
        "label": "Colher de arroz cháeia picado(a) (10g)"
      },
      {
        "measure": "Colher de sopa cháeia picado(a)",
        "grams": 6.0,
        "label": "Colher de sopa cháeia picado(a) (6g)"
      },
      {
        "measure": "Folha grande",
        "grams": 20.0,
        "label": "Folha grande (20g)"
      },
      {
        "measure": "Folha média",
        "grams": 10.0,
        "label": "Folha média (10g)"
      },
      {
        "measure": "Folha pequena",
        "grams": 30.0,
        "label": "Folha pequena (30g)"
      },
      {
        "measure": "Prato raso R Picada",
        "grams": 60.0,
        "label": "Prato raso R Picada (60g)"
      }
    ],
    "ACEROLA": [
      {
        "measure": "Unidade",
        "grams": 12.0,
        "label": "Unidade (12g)"
      }
    ],
    "ACUW MASCAVO": [
      {
        "measure": "Col Caféé Ch",
        "grams": 23.0,
        "label": "Col Caféé Ch (23g)"
      },
      {
        "measure": "Col Caféé R",
        "grams": 10.0,
        "label": "Col Caféé R (10g)"
      },
      {
        "measure": "Colher de cháá cháeia",
        "grams": 4.0,
        "label": "Colher de cháá cháeia (4g)"
      },
      {
        "measure": "Colher de cháá rasa",
        "grams": 2.5,
        "label": "Colher de cháá rasa (2.5g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 19.0,
        "label": "Colher de sopa cháeia (19g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 11.0,
        "label": "Colher de sopa rasa (11g)"
      },
      {
        "measure": "Colher de sobremesa rasa",
        "grams": 7.0,
        "label": "Colher de sobremesa rasa (7g)"
      },
      {
        "measure": "X Caféé Ch",
        "grams": 56.0,
        "label": "X Caféé Ch (56g)"
      }
    ],
    "ADES ORIGINAL": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 165.0,
        "label": "Copo pequeno (165ml) (165g)"
      },
      {
        "measure": "Unidade",
        "grams": 250.0,
        "label": "Unidade (250g)"
      }
    ],
    "AGRIAO": [
      {
        "measure": "Pires Ch Picado",
        "grams": 10.0,
        "label": "Pires Ch Picado (10g)"
      },
      {
        "measure": "Prato de sobremesa Ch Picado",
        "grams": 20.0,
        "label": "Prato de sobremesa Ch Picado (20g)"
      },
      {
        "measure": "Ramo M",
        "grams": 5.0,
        "label": "Ramo M (5g)"
      }
    ],
    "AGRIAO REFOGADO": [
      {
        "measure": "Colher de arroz rasa",
        "grams": 35.0,
        "label": "Colher de arroz rasa (35g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Garfada",
        "grams": 300.0,
        "label": "Garfada (300g)"
      }
    ],
    "AGUA DE COCO": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      }
    ],
    "AGUARDENTE": [
      {
        "measure": "Dose",
        "grams": 50.0,
        "label": "Dose (50g)"
      }
    ],
    "AIPIM COZIDO": [
      {
        "measure": "Colher de sopa cháeia picado(a)",
        "grams": 30.0,
        "label": "Colher de sopa cháeia picado(a) (30g)"
      },
      {
        "measure": "Colher de sopa rasa picado(a)",
        "grams": 20.0,
        "label": "Colher de sopa rasa picado(a) (20g)"
      },
      {
        "measure": "Pedaço grande",
        "grams": 180.0,
        "label": "Pedaço grande (180g)"
      }
    ],
    "AIPIM FRITO": [
      {
        "measure": "Colher de arroz cháeia picado(a)",
        "grams": 60.0,
        "label": "Colher de arroz cháeia picado(a) (60g)"
      },
      {
        "measure": "Colher de arroz rasa picado(a)",
        "grams": 35.0,
        "label": "Colher de arroz rasa picado(a) (35g)"
      },
      {
        "measure": "Escumadeira média cháeia picado(a)",
        "grams": 95.0,
        "label": "Escumadeira média cháeia picado(a) (95g)"
      },
      {
        "measure": "Escumadeira média rasa picado(a)",
        "grams": 65.0,
        "label": "Escumadeira média rasa picado(a) (65g)"
      },
      {
        "measure": "Pedaço grande",
        "grams": 155.0,
        "label": "Pedaço grande (155g)"
      },
      {
        "measure": "Pedaço pequeno",
        "grams": 350.0,
        "label": "Pedaço pequeno (350g)"
      }
    ],
    "ALFACE": [
      {
        "measure": "Colher de sopa cháeia picado(a)",
        "grams": 25.0,
        "label": "Colher de sopa cháeia picado(a) (25g)"
      },
      {
        "measure": "Folha grande",
        "grams": 15.0,
        "label": "Folha grande (15g)"
      },
      {
        "measure": "Folha média",
        "grams": 100.0,
        "label": "Folha média (100g)"
      },
      {
        "measure": "Pires Ch Picada",
        "grams": 200.0,
        "label": "Pires Ch Picada (200g)"
      },
      {
        "measure": "Pt Rchá Picada",
        "grams": 800.0,
        "label": "Pt Rchá Picada (800g)"
      },
      {
        "measure": "Unidade grande",
        "grams": 400.0,
        "label": "Unidade grande (400g)"
      },
      {
        "measure": "Unidade média",
        "grams": 200.0,
        "label": "Unidade média (200g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 130.0,
        "label": "Unidade pequena (130g)"
      }
    ],
    "ALL BRAN KELLOGG S": [
      {
        "measure": "Caixa",
        "grams": 250.0,
        "label": "Caixa (250g)"
      },
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 83.0,
        "label": "Copo duplo (240ml) (240ml) (83g)"
      }
    ],
    "AI MONDIGA": [
      {
        "measure": "Unidade média",
        "grams": 500.0,
        "label": "Unidade média (500g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 30.0,
        "label": "Unidade pequena (30g)"
      }
    ],
    "LIGHT SADIA": [
      {
        "measure": "Caixa Com",
        "grams": 20.0,
        "label": "Caixa Com (20g)"
      },
      {
        "measure": "Unidade",
        "grams": 250.0,
        "label": "Unidade (250g)"
      },
      {
        "measure": "Unidade grande",
        "grams": 520.0,
        "label": "Unidade grande (520g)"
      },
      {
        "measure": "Unidade média",
        "grams": 42.0,
        "label": "Unidade média (42g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 34.0,
        "label": "Unidade pequena (34g)"
      }
    ],
    "AMEIXA SECA": [
      {
        "measure": "Unidade média",
        "grams": 5.0,
        "label": "Unidade média (5g)"
      }
    ],
    "AMEIXA VERMELHA": [
      {
        "measure": "Unidade média",
        "grams": 16.0,
        "label": "Unidade média (16g)"
      }
    ],
    "AMENDOA": [
      {
        "measure": "Unidade",
        "grams": 10.0,
        "label": "Unidade (10g)"
      }
    ],
    "CARAMELIZADO": [
      {
        "measure": "Pacote P",
        "grams": 200.0,
        "label": "Pacote P (200g)"
      }
    ],
    "TORRADO COM SAL": [
      {
        "measure": "Canudo",
        "grams": 350.0,
        "label": "Canudo (350g)"
      },
      {
        "measure": "Cols",
        "grams": 170.0,
        "label": "Cols (170g)"
      },
      {
        "measure": "Pacote P",
        "grams": 50.0,
        "label": "Pacote P (50g)"
      },
      {
        "measure": "Punhado",
        "grams": 300.0,
        "label": "Punhado (300g)"
      },
      {
        "measure": "Unidade",
        "grams": 8.0,
        "label": "Unidade (8g)"
      }
    ],
    "ANGU": [
      {
        "measure": "Concháa média cháeia",
        "grams": 150.0,
        "label": "Concháa média cháeia (150g)"
      },
      {
        "measure": "Colher de arroz cháeia",
        "grams": 60.0,
        "label": "Colher de arroz cháeia (60g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 35.0,
        "label": "Colher de sopa cháeia (35g)"
      },
      {
        "measure": "Pedaço grande",
        "grams": 200.0,
        "label": "Pedaço grande (200g)"
      },
      {
        "measure": "Pedaço médio",
        "grams": 1500.0,
        "label": "Pedaço médio (1500g)"
      }
    ],
    "ARROZ A GREGA": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 45.0,
        "label": "Colher de arroz cháeia (45g)"
      },
      {
        "measure": "Colher de arroz rasa",
        "grams": 30.0,
        "label": "Colher de arroz rasa (30g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 15.0,
        "label": "Colher de sopa rasa (15g)"
      },
      {
        "measure": "Escumadeira média cháeia",
        "grams": 85.0,
        "label": "Escumadeira média cháeia (85g)"
      },
      {
        "measure": "Escumadeira média rasa",
        "grams": 60.0,
        "label": "Escumadeira média rasa (60g)"
      }
    ],
    "CO M CH": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 45.0,
        "label": "Colher de arroz cháeia (45g)"
      },
      {
        "measure": "Colher de arroz rasa",
        "grams": 30.0,
        "label": "Colher de arroz rasa (30g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 15.0,
        "label": "Colher de sopa rasa (15g)"
      },
      {
        "measure": "Escumadeira média rasa",
        "grams": 60.0,
        "label": "Escumadeira média rasa (60g)"
      },
      {
        "measure": "Ptfchá",
        "grams": 200.0,
        "label": "Ptfchá (200g)"
      }
    ],
    "ARROZ DOCE": [
      {
        "measure": "Concháa média cháeia",
        "grams": 140.0,
        "label": "Concháa média cháeia (140g)"
      },
      {
        "measure": "Colher de arroz cháeia",
        "grams": 90.0,
        "label": "Colher de arroz cháeia (90g)"
      },
      {
        "measure": "Colher de arroz rasa",
        "grams": 50.0,
        "label": "Colher de arroz rasa (50g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 25.0,
        "label": "Colher de sopa rasa (25g)"
      },
      {
        "measure": "Colher de sobremesa rasa",
        "grams": 15.0,
        "label": "Colher de sobremesa rasa (15g)"
      },
      {
        "measure": "Pires",
        "grams": 1200.0,
        "label": "Pires (1200g)"
      },
      {
        "measure": "Prato raso",
        "grams": 400.0,
        "label": "Prato raso (400g)"
      },
      {
        "measure": "Prato de sobremesa",
        "grams": 280.0,
        "label": "Prato de sobremesa (280g)"
      }
    ],
    "ARROZ INTEGRAL COZIDO": [
      {
        "measure": "Colher de sopa cheia",
        "grams": 20.0,
        "label": "Colher de sopa cheia (20g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 12.0,
        "label": "Colher de sopa rasa (12g)"
      },
      {
        "measure": "Colher de arroz cheia",
        "grams": 63.0,
        "label": "Colher de arroz cheia (63g)"
      },
      {
        "measure": "Colher de arroz rasa",
        "grams": 43.0,
        "label": "Colher de arroz rasa (43g)"
      },
      {
        "measure": "Escumadeira média cheia",
        "grams": 59.0,
        "label": "Escumadeira média cheia (59g)"
      },
      {
        "measure": "Escumadeira média rasa",
        "grams": 31.0,
        "label": "Escumadeira média rasa (31g)"
      },
      {
        "measure": "Concha média cheia",
        "grams": 117.0,
        "label": "Concha média cheia (117g)"
      }
    ],
    "ASPARGO EM CONSERVA": [
      {
        "measure": "Unidade média",
        "grams": 75.0,
        "label": "Unidade média (75g)"
      }
    ],
    "ATUM EM CONSERVA": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 16.0,
        "label": "Colher de sopa cháeia (16g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 11.0,
        "label": "Colher de sopa rasa (11g)"
      },
      {
        "measure": "Colher de sobremesa rasa",
        "grams": 15.0,
        "label": "Colher de sobremesa rasa (15g)"
      }
    ],
    "AVEIA EM FLOCOS": [
      {
        "measure": "Colher de cháá cháeia",
        "grams": 5.0,
        "label": "Colher de cháá cháeia (5g)"
      },
      {
        "measure": "Colher de cháá rasa",
        "grams": 15.0,
        "label": "Colher de cháá rasa (15g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 15.0,
        "label": "Colher de sopa cháeia (15g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 25.0,
        "label": "Colher de sopa rasa (25g)"
      },
      {
        "measure": "Colher de sobremesa rasa",
        "grams": 15.0,
        "label": "Colher de sobremesa rasa (15g)"
      }
    ],
    "AVEIA FARINHA": [
      {
        "measure": "Colher de cháá cháeia",
        "grams": 4.0,
        "label": "Colher de cháá cháeia (4g)"
      },
      {
        "measure": "Colcháár V",
        "grams": 673.0,
        "label": "Colcháár V (673g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 18.0,
        "label": "Colher de sopa cháeia (18g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 25.0,
        "label": "Colher de sopa rasa (25g)"
      },
      {
        "measure": "Colher de sobremesa cháeia",
        "grams": 8.0,
        "label": "Colher de sobremesa cháeia (8g)"
      }
    ],
    "AVELA": [
      {
        "measure": "Punhado",
        "grams": 250.0,
        "label": "Punhado (250g)"
      },
      {
        "measure": "Unidade",
        "grams": 10.0,
        "label": "Unidade (10g)"
      }
    ],
    "AZEITE DE DENDE": [
      {
        "measure": "Col Chá",
        "grams": 20.0,
        "label": "Col Chá (20g)"
      },
      {
        "measure": "Cols",
        "grams": 80.0,
        "label": "Cols (80g)"
      },
      {
        "measure": "Col Sob",
        "grams": 50.0,
        "label": "Col Sob (50g)"
      }
    ],
    "AZEITONA": [
      {
        "measure": "Unidade média",
        "grams": 30.0,
        "label": "Unidade média (30g)"
      }
    ],
    "BABA DE MOCA": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 50.0,
        "label": "Colher de arroz cháeia (50g)"
      },
      {
        "measure": "Colher de cháá cháeia",
        "grams": 12.0,
        "label": "Colher de cháá cháeia (12g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 30.0,
        "label": "Colher de sopa cháeia (30g)"
      },
      {
        "measure": "Porção",
        "grams": 90.0,
        "label": "Porção (90g)"
      }
    ],
    "BACALHAU COZIDO": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 55.0,
        "label": "Colher de arroz cháeia (55g)"
      },
      {
        "measure": "Colher de arroz rasa",
        "grams": 40.0,
        "label": "Colher de arroz rasa (40g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 15.0,
        "label": "Colher de sopa rasa (15g)"
      },
      {
        "measure": "Escumadeira média cháeia",
        "grams": 60.0,
        "label": "Escumadeira média cháeia (60g)"
      },
      {
        "measure": "Escumadeira média rasa",
        "grams": 48.0,
        "label": "Escumadeira média rasa (48g)"
      },
      {
        "measure": "Pedaço grande",
        "grams": 220.0,
        "label": "Pedaço grande (220g)"
      },
      {
        "measure": "Pedaço médio",
        "grams": 1350.0,
        "label": "Pedaço médio (1350g)"
      },
      {
        "measure": "Pedaço pequeno",
        "grams": 70.0,
        "label": "Pedaço pequeno (70g)"
      }
    ],
    "BACON": [
      {
        "measure": "Fatia média",
        "grams": 150.0,
        "label": "Fatia média (150g)"
      },
      {
        "measure": "Unidade",
        "grams": 50.0,
        "label": "Unidade (50g)"
      },
      {
        "measure": "Unidade grande",
        "grams": 1500.0,
        "label": "Unidade grande (1500g)"
      }
    ],
    "BANANA D AGUA": [
      {
        "measure": "Unidade grande",
        "grams": 90.0,
        "label": "Unidade grande (90g)"
      },
      {
        "measure": "Unidade média",
        "grams": 700.0,
        "label": "Unidade média (700g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 400.0,
        "label": "Unidade pequena (400g)"
      }
    ],
    "BANANA DA TERRA FRITA": [
      {
        "measure": "Fatia grande",
        "grams": 42.0,
        "label": "Fatia grande (42g)"
      },
      {
        "measure": "Fatia média",
        "grams": 310.0,
        "label": "Fatia média (310g)"
      },
      {
        "measure": "Fatia pequena",
        "grams": 150.0,
        "label": "Fatia pequena (150g)"
      }
    ],
    "FRITA C AC": [
      {
        "measure": "Fatia grande",
        "grams": 48.0,
        "label": "Fatia grande (48g)"
      },
      {
        "measure": "Fatia média",
        "grams": 350.0,
        "label": "Fatia média (350g)"
      },
      {
        "measure": "Fatia pequena",
        "grams": 170.0,
        "label": "Fatia pequena (170g)"
      }
    ],
    "BANANA PRATA": [
      {
        "measure": "Unidade grande",
        "grams": 55.0,
        "label": "Unidade grande (55g)"
      },
      {
        "measure": "Unidade média",
        "grams": 40.0,
        "label": "Unidade média (40g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 300.0,
        "label": "Unidade pequena (300g)"
      }
    ],
    "BANANADA": [
      {
        "measure": "Unidade grande",
        "grams": 50.0,
        "label": "Unidade grande (50g)"
      },
      {
        "measure": "Unidade média",
        "grams": 40.0,
        "label": "Unidade média (40g)"
      }
    ],
    "BARQUETE DE LEGUMES": [
      {
        "measure": "Unidade média",
        "grams": 22.0,
        "label": "Unidade média (22g)"
      }
    ],
    "BATATA BAROA COZIDA": [
      {
        "measure": "Colher de arroz rasa picado(a)",
        "grams": 35.0,
        "label": "Colher de arroz rasa picado(a) (35g)"
      },
      {
        "measure": "Colher de sopa cháeia picado(a)",
        "grams": 35.0,
        "label": "Colher de sopa cháeia picado(a) (35g)"
      },
      {
        "measure": "Colher de sopa rasa picado(a)",
        "grams": 15.0,
        "label": "Colher de sopa rasa picado(a) (15g)"
      },
      {
        "measure": "Pedaço grande",
        "grams": 75.0,
        "label": "Pedaço grande (75g)"
      },
      {
        "measure": "Pedaço médio",
        "grams": 50.0,
        "label": "Pedaço médio (50g)"
      },
      {
        "measure": "Unidade grande",
        "grams": 580.0,
        "label": "Unidade grande (580g)"
      },
      {
        "measure": "Unidade média",
        "grams": 140.0,
        "label": "Unidade média (140g)"
      },
      {
        "measure": "Fatia grande",
        "grams": 90.0,
        "label": "Fatia grande (90g)"
      }
    ],
    "BATATA DOCE FRITA": [
      {
        "measure": "Fig",
        "grams": 840.0,
        "label": "Fig (840g)"
      },
      {
        "measure": "Fatia pequena",
        "grams": 30.0,
        "label": "Fatia pequena (30g)"
      },
      {
        "measure": "Pacote M",
        "grams": 135.0,
        "label": "Pacote M (135g)"
      },
      {
        "measure": "Pacotep",
        "grams": 720.0,
        "label": "Pacotep (720g)"
      },
      {
        "measure": "Punhado",
        "grams": 12.8,
        "label": "Punhado (12.8g)"
      },
      {
        "measure": "Unidade",
        "grams": 13.0,
        "label": "Unidade (13g)"
      },
      {
        "measure": "Colher de sopa cháeia picado(a)",
        "grams": 30.0,
        "label": "Colher de sopa cháeia picado(a) (30g)"
      },
      {
        "measure": "Unidade média",
        "grams": 140.0,
        "label": "Unidade média (140g)"
      },
      {
        "measure": "Colher de arroz cháeia",
        "grams": 50.0,
        "label": "Colher de arroz cháeia (50g)"
      },
      {
        "measure": "Escumadeira média cháeia",
        "grams": 65.0,
        "label": "Escumadeira média cháeia (65g)"
      }
    ],
    "I PORCQO P": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 75.0,
        "label": "Colher de arroz cháeia (75g)"
      },
      {
        "measure": "Colher de arroz rasa",
        "grams": 60.0,
        "label": "Colher de arroz rasa (60g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 20.0,
        "label": "Colher de sopa rasa (20g)"
      },
      {
        "measure": "Escumadeira média cháeia",
        "grams": 125.0,
        "label": "Escumadeira média cháeia (125g)"
      },
      {
        "measure": "Escumadeira média rasa",
        "grams": 75.0,
        "label": "Escumadeira média rasa (75g)"
      }
    ],
    "BERINJELA FRITA": [
      {
        "measure": "Fatia grande",
        "grams": 350.0,
        "label": "Fatia grande (350g)"
      },
      {
        "measure": "Fatia média",
        "grams": 200.0,
        "label": "Fatia média (200g)"
      },
      {
        "measure": "Fatia pequena",
        "grams": 10.0,
        "label": "Fatia pequena (10g)"
      },
      {
        "measure": "Rodela grande",
        "grams": 20.0,
        "label": "Rodela grande (20g)"
      },
      {
        "measure": "Rodela média",
        "grams": 13.0,
        "label": "Rodela média (13g)"
      },
      {
        "measure": "Rodela pequena",
        "grams": 5.0,
        "label": "Rodela pequena (5g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      }
    ],
    "BETERRABA": [
      {
        "measure": "Colher de sopa cháeia ralado(a)",
        "grams": 16.0,
        "label": "Colher de sopa cháeia ralado(a) (16g)"
      },
      {
        "measure": "Unidade média",
        "grams": 140.0,
        "label": "Unidade média (140g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 800.0,
        "label": "Unidade pequena (800g)"
      }
    ],
    "BETERRABA COZIDA": [
      {
        "measure": "Colher de arroz cháeia picado(a)",
        "grams": 38.0,
        "label": "Colher de arroz cháeia picado(a) (38g)"
      },
      {
        "measure": "Colher de sopa cháeia picado(a)",
        "grams": 20.0,
        "label": "Colher de sopa cháeia picado(a) (20g)"
      },
      {
        "measure": "Colher de sopa rasa picado(a)",
        "grams": 14.0,
        "label": "Colher de sopa rasa picado(a) (14g)"
      },
      {
        "measure": "Escumadeira média rasa picado(a)",
        "grams": 45.0,
        "label": "Escumadeira média rasa picado(a) (45g)"
      },
      {
        "measure": "Fatia grande",
        "grams": 260.0,
        "label": "Fatia grande (260g)"
      },
      {
        "measure": "Fatia média",
        "grams": 120.0,
        "label": "Fatia média (120g)"
      },
      {
        "measure": "Fatia pequena",
        "grams": 60.0,
        "label": "Fatia pequena (60g)"
      },
      {
        "measure": "Unidade grande",
        "grams": 335.0,
        "label": "Unidade grande (335g)"
      },
      {
        "measure": "Unidade média",
        "grams": 1250.0,
        "label": "Unidade média (1250g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 750.0,
        "label": "Unidade pequena (750g)"
      }
    ],
    "BIFE": [
      {
        "measure": "Unidade grande",
        "grams": 150.0,
        "label": "Unidade grande (150g)"
      }
    ],
    "BIFE A MILANESA": [
      {
        "measure": "Unidade grande",
        "grams": 1100.0,
        "label": "Unidade grande (1100g)"
      },
      {
        "measure": "Unidade média",
        "grams": 80.0,
        "label": "Unidade média (80g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 55.0,
        "label": "Unidade pequena (55g)"
      }
    ],
    "BIFE DE FIGADO": [
      {
        "measure": "Unidade grande",
        "grams": 150.0,
        "label": "Unidade grande (150g)"
      }
    ],
    "BIFE ROLE": [
      {
        "measure": "Unidade grande",
        "grams": 1500.0,
        "label": "Unidade grande (1500g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 80.0,
        "label": "Unidade pequena (80g)"
      },
      {
        "measure": "Cxa",
        "grams": 150.0,
        "label": "Cxa (150g)"
      },
      {
        "measure": "Unidade",
        "grams": 7.5,
        "label": "Unidade (7.5g)"
      },
      {
        "measure": "Pacote",
        "grams": 200.0,
        "label": "Pacote (200g)"
      }
    ],
    "BISCOITO AMANTEIGADO": [
      {
        "measure": "Pacote",
        "grams": 90.0,
        "label": "Pacote (90g)"
      },
      {
        "measure": "Unidade",
        "grams": 40.0,
        "label": "Unidade (40g)"
      }
    ],
    "SAO LUIZ": [
      {
        "measure": "Pacote",
        "grams": 200.0,
        "label": "Pacote (200g)"
      },
      {
        "measure": "Unidade",
        "grams": 60.0,
        "label": "Unidade (60g)"
      },
      {
        "measure": "Pacote M",
        "grams": 55.0,
        "label": "Pacote M (55g)"
      },
      {
        "measure": "Punhado",
        "grams": 90.0,
        "label": "Punhado (90g)"
      }
    ],
    "BOLA": [
      {
        "measure": "Pacoteg",
        "grams": 160.0,
        "label": "Pacoteg (160g)"
      },
      {
        "measure": "Punhado",
        "grams": 60.0,
        "label": "Punhado (60g)"
      }
    ],
    "PRESUNTO": [
      {
        "measure": "Punhado",
        "grams": 80.0,
        "label": "Punhado (80g)"
      }
    ],
    "QUEIJO": [
      {
        "measure": "Punhado",
        "grams": 80.0,
        "label": "Punhado (80g)"
      },
      {
        "measure": "Unidade",
        "grams": 3.0,
        "label": "Unidade (3g)"
      },
      {
        "measure": "Pacote",
        "grams": 200.0,
        "label": "Pacote (200g)"
      }
    ],
    "PACOTE BOLINHA PALITO": [
      {
        "measure": "Pacote Rosca",
        "grams": 40.0,
        "label": "Pacote Rosca (40g)"
      },
      {
        "measure": "Punhado Bolinha",
        "grams": 70.0,
        "label": "Punhado Bolinha (70g)"
      }
    ],
    "CHOCOLATE": [
      {
        "measure": "Pacote",
        "grams": 200.0,
        "label": "Pacote (200g)"
      },
      {
        "measure": "Unidade",
        "grams": 13.0,
        "label": "Unidade (13g)"
      },
      {
        "measure": "Colher de cháá cháeia",
        "grams": 4.0,
        "label": "Colher de cháá cháeia (4g)"
      },
      {
        "measure": "Colcháár",
        "grams": 25.0,
        "label": "Colcháár (25g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 20.0,
        "label": "Colher de sopa cháeia (20g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 25.0,
        "label": "Colher de sopa rasa (25g)"
      }
    ],
    "DE LEITE TOSTINES": [
      {
        "measure": "Pacote",
        "grams": 200.0,
        "label": "Pacote (200g)"
      },
      {
        "measure": "Unidade",
        "grams": 7.0,
        "label": "Unidade (7g)"
      }
    ],
    "PARMALAT CHOCOLATE": [
      {
        "measure": "Pacoteg",
        "grams": 160.0,
        "label": "Pacoteg (160g)"
      },
      {
        "measure": "Unidade",
        "grams": 75.0,
        "label": "Unidade (75g)"
      },
      {
        "measure": "Pacote G",
        "grams": 160.0,
        "label": "Pacote G (160g)"
      }
    ],
    "BOBO DE CAMARAO": [
      {
        "measure": "Concháa média cháeia",
        "grams": 190.0,
        "label": "Concháa média cháeia (190g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 28.0,
        "label": "Colher de sopa cháeia (28g)"
      },
      {
        "measure": "Prato fundo",
        "grams": 320.0,
        "label": "Prato fundo (320g)"
      },
      {
        "measure": "Prato raso",
        "grams": 225.0,
        "label": "Prato raso (225g)"
      }
    ],
    "BOLINHA DE QUEIJO": [
      {
        "measure": "Unidade pequena",
        "grams": 10.0,
        "label": "Unidade pequena (10g)"
      }
    ],
    "CARNE": [
      {
        "measure": "Unidade média",
        "grams": 45.0,
        "label": "Unidade média (45g)"
      }
    ],
    "BOLINHO DE ARROZ": [
      {
        "measure": "Unidade grande",
        "grams": 60.0,
        "label": "Unidade grande (60g)"
      },
      {
        "measure": "Unidade média",
        "grams": 40.0,
        "label": "Unidade média (40g)"
      }
    ],
    "BOLINHO DE BACALHAU": [
      {
        "measure": "Unidade grande",
        "grams": 60.0,
        "label": "Unidade grande (60g)"
      }
    ],
    "IOI INNO DE VAGEM": [
      {
        "measure": "Unidade média",
        "grams": 200.0,
        "label": "Unidade média (200g)"
      }
    ],
    "BOLO SIMPLES": [
      {
        "measure": "Fatia pequena",
        "grams": 300.0,
        "label": "Fatia pequena (300g)"
      }
    ],
    "BOLO DE BANANA": [
      {
        "measure": "Fatia grande",
        "grams": 90.0,
        "label": "Fatia grande (90g)"
      },
      {
        "measure": "Fatia média",
        "grams": 70.0,
        "label": "Fatia média (70g)"
      },
      {
        "measure": "P",
        "grams": 50.0,
        "label": "P (50g)"
      }
    ],
    "BOLO DE CENOURA": [
      {
        "measure": "Fatia grande",
        "grams": 100.0,
        "label": "Fatia grande (100g)"
      },
      {
        "measure": "Fatia pequena",
        "grams": 30.0,
        "label": "Fatia pequena (30g)"
      }
    ],
    "DE CHOCOLATE": [
      {
        "measure": "Fatia grande",
        "grams": 175.0,
        "label": "Fatia grande (175g)"
      }
    ],
    "BRIGADEIRO": [
      {
        "measure": "Copo Caféezinho",
        "grams": 50.0,
        "label": "Copo Caféezinho (50g)"
      }
    ],
    "CAFE SOLUVEL": [
      {
        "measure": "Colher de cháá cháeia",
        "grams": 15.0,
        "label": "Colher de cháá cháeia (15g)"
      }
    ],
    "CAJA MANGA": [
      {
        "measure": "Unidade média",
        "grams": 55.0,
        "label": "Unidade média (55g)"
      },
      {
        "measure": "Í Concháa média cháeia",
        "grams": 130.0,
        "label": "Í Concháa média cháeia (130g)"
      }
    ],
    "CAMARAO": [
      {
        "measure": "Unidade grande",
        "grams": 30.0,
        "label": "Unidade grande (30g)"
      }
    ],
    "CAMARAO FRITO": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 35.0,
        "label": "Colher de arroz cháeia (35g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 20.0,
        "label": "Colher de sopa cháeia (20g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 5.0,
        "label": "Unidade pequena (5g)"
      },
      {
        "measure": "Unidade grande",
        "grams": 60.0,
        "label": "Unidade grande (60g)"
      },
      {
        "measure": "Unidade média",
        "grams": 45.0,
        "label": "Unidade média (45g)"
      }
    ],
    "CANELONE DE RICOTA": [
      {
        "measure": "Unidade grande",
        "grams": 40.0,
        "label": "Unidade grande (40g)"
      },
      {
        "measure": "Unidade média",
        "grams": 30.0,
        "label": "Unidade média (30g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 20.0,
        "label": "Unidade pequena (20g)"
      }
    ],
    "CANJA": [
      {
        "measure": "Concháa média cháeia",
        "grams": 130.0,
        "label": "Concháa média cháeia (130g)"
      },
      {
        "measure": "Concháa pequena cháeia",
        "grams": 60.0,
        "label": "Concháa pequena cháeia (60g)"
      },
      {
        "measure": "Prato fundo",
        "grams": 520.0,
        "label": "Prato fundo (520g)"
      }
    ],
    "CANJICA": [
      {
        "measure": "Concháa média cháeia",
        "grams": 120.0,
        "label": "Concháa média cháeia (120g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      },
      {
        "measure": "Copopchá",
        "grams": 180.0,
        "label": "Copopchá (180g)"
      },
      {
        "measure": "Prato fundo",
        "grams": 460.0,
        "label": "Prato fundo (460g)"
      },
      {
        "measure": "Prato raso",
        "grams": 300.0,
        "label": "Prato raso (300g)"
      }
    ],
    "CAQUI": [
      {
        "measure": "Unidade grande",
        "grams": 150.0,
        "label": "Unidade grande (150g)"
      },
      {
        "measure": "Unidade média",
        "grams": 110.0,
        "label": "Unidade média (110g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 85.0,
        "label": "Unidade pequena (85g)"
      }
    ],
    "CARNE ASSADA": [
      {
        "measure": "Fatia grande",
        "grams": 135.0,
        "label": "Fatia grande (135g)"
      },
      {
        "measure": "Fitp",
        "grams": 75.0,
        "label": "Fitp (75g)"
      }
    ],
    "CARNE ENSOPADA": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 30.0,
        "label": "Colher de sopa cháeia (30g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 20.0,
        "label": "Colher de sopa rasa (20g)"
      },
      {
        "measure": "Pedaço médio",
        "grams": 35.0,
        "label": "Pedaço médio (35g)"
      },
      {
        "measure": "Pedaço pequeno",
        "grams": 20.0,
        "label": "Pedaço pequeno (20g)"
      }
    ],
    "COM LEGUMES": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 70.0,
        "label": "Colher de arroz cháeia (70g)"
      },
      {
        "measure": "Colher de arroz rasa",
        "grams": 45.0,
        "label": "Colher de arroz rasa (45g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 35.0,
        "label": "Colher de sopa cháeia (35g)"
      }
    ],
    "CARNE MOIDA": [
      {
        "measure": "Colher de sopa cheia",
        "grams": 30.0,
        "label": "Colher de sopa cheia (30g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 20.0,
        "label": "Colher de sopa rasa (20g)"
      },
      {
        "measure": "Colher de arroz cheia",
        "grams": 50.0,
        "label": "Colher de arroz cheia (50g)"
      },
      {
        "measure": "Porção média",
        "grams": 100.0,
        "label": "Porção média (100g)"
      },
      {
        "measure": "Porção grande",
        "grams": 150.0,
        "label": "Porção grande (150g)"
      }
    ],
    "CARNE SECA": [
      {
        "measure": "Colher de arroz cháeia picado(a)",
        "grams": 28.0,
        "label": "Colher de arroz cháeia picado(a) (28g)"
      },
      {
        "measure": "Colher de sopa cháeia picado(a)",
        "grams": 18.0,
        "label": "Colher de sopa cháeia picado(a) (18g)"
      },
      {
        "measure": "Pedaço grande",
        "grams": 130.0,
        "label": "Pedaço grande (130g)"
      },
      {
        "measure": "Pedaço médio",
        "grams": 65.0,
        "label": "Pedaço médio (65g)"
      },
      {
        "measure": "Pedaço pequeno",
        "grams": 20.0,
        "label": "Pedaço pequeno (20g)"
      }
    ],
    "CARRE": [
      {
        "measure": "Unidade grande",
        "grams": 120.0,
        "label": "Unidade grande (120g)"
      },
      {
        "measure": "Unidade média",
        "grams": 90.0,
        "label": "Unidade média (90g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 60.0,
        "label": "Unidade pequena (60g)"
      }
    ],
    "TORRADA": [
      {
        "measure": "Punhado",
        "grams": 40.0,
        "label": "Punhado (40g)"
      },
      {
        "measure": "Unidade média",
        "grams": 25.0,
        "label": "Unidade média (25g)"
      },
      {
        "measure": "Unidade",
        "grams": 80.0,
        "label": "Unidade (80g)"
      }
    ],
    "CASTANHA DO PARA": [
      {
        "measure": "Unidade",
        "grams": 4.0,
        "label": "Unidade (4g)"
      }
    ],
    "CEBOLA": [
      {
        "measure": "Colher de sopa cháeia picado(a)",
        "grams": 10.0,
        "label": "Colher de sopa cháeia picado(a) (10g)"
      },
      {
        "measure": "Fatia grande",
        "grams": 10.0,
        "label": "Fatia grande (10g)"
      },
      {
        "measure": "Fatia média",
        "grams": 6.0,
        "label": "Fatia média (6g)"
      },
      {
        "measure": "Fatia pequena",
        "grams": 4.0,
        "label": "Fatia pequena (4g)"
      },
      {
        "measure": "Unidade grande",
        "grams": 150.0,
        "label": "Unidade grande (150g)"
      },
      {
        "measure": "Unidade média",
        "grams": 70.0,
        "label": "Unidade média (70g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 30.0,
        "label": "Unidade pequena (30g)"
      }
    ],
    "CENOURA": [
      {
        "measure": "Colher de sopa cháeia ralado(a)",
        "grams": 12.0,
        "label": "Colher de sopa cháeia ralado(a) (12g)"
      },
      {
        "measure": "Unidade grande",
        "grams": 160.0,
        "label": "Unidade grande (160g)"
      },
      {
        "measure": "Unidade média",
        "grams": 120.0,
        "label": "Unidade média (120g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 55.0,
        "label": "Unidade pequena (55g)"
      },
      {
        "measure": "Colher de arroz cháeia picado(a)",
        "grams": 40.0,
        "label": "Colher de arroz cháeia picado(a) (40g)"
      },
      {
        "measure": "Colher de sopa cháeia picado(a)",
        "grams": 25.0,
        "label": "Colher de sopa cháeia picado(a) (25g)"
      },
      {
        "measure": "Colsrpicada",
        "grams": 15.0,
        "label": "Colsrpicada (15g)"
      },
      {
        "measure": "Escumadeira média rasa picado(a)",
        "grams": 48.0,
        "label": "Escumadeira média rasa picado(a) (48g)"
      }
    ],
    "CENOURA REFOGADA": [
      {
        "measure": "Colher de sopa cháeia picado(a)",
        "grams": 25.0,
        "label": "Colher de sopa cháeia picado(a) (25g)"
      },
      {
        "measure": "Colher de sopa rasa picado(a)",
        "grams": 25.0,
        "label": "Colher de sopa rasa picado(a) (25g)"
      }
    ],
    "TOSTADO": [
      {
        "measure": "Unidade",
        "grams": 25.0,
        "label": "Unidade (25g)"
      }
    ],
    "AVEIA E MEL": [
      {
        "measure": "Unidade",
        "grams": 25.0,
        "label": "Unidade (25g)"
      }
    ],
    "BANANA NUTRY": [
      {
        "measure": "Unidade",
        "grams": 25.0,
        "label": "Unidade (25g)"
      }
    ],
    "AVEIA BANANA E MEL": [
      {
        "measure": "Unidade",
        "grams": 25.0,
        "label": "Unidade (25g)"
      }
    ],
    "TRIO LIGHT FRUTAS": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 165.0,
        "label": "Copo pequeno (165ml) (165g)"
      },
      {
        "measure": "Garrafa G",
        "grams": 600.0,
        "label": "Garrafa G (600g)"
      },
      {
        "measure": "Lata",
        "grams": 350.0,
        "label": "Lata (350g)"
      },
      {
        "measure": "Tulipa",
        "grams": 290.0,
        "label": "Tulipa (290g)"
      }
    ],
    "CHEESEBURGUER": [
      {
        "measure": "Unidade",
        "grams": 140.0,
        "label": "Unidade (140g)"
      }
    ],
    "CHICKEN MCNUGGETS": [
      {
        "measure": "Cxa",
        "grams": 110.0,
        "label": "Cxa (110g)"
      },
      {
        "measure": "Unidade",
        "grams": 180.0,
        "label": "Unidade (180g)"
      }
    ],
    "CHICORIA": [
      {
        "measure": "Folhag",
        "grams": 17.0,
        "label": "Folhag (17g)"
      },
      {
        "measure": "Folha média",
        "grams": 12.0,
        "label": "Folha média (12g)"
      },
      {
        "measure": "Folhap",
        "grams": 70.0,
        "label": "Folhap (70g)"
      }
    ],
    "CHICORIA REFOGADA": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 76.0,
        "label": "Colher de arroz cháeia (76g)"
      },
      {
        "measure": "Colher de arroz rasa",
        "grams": 38.0,
        "label": "Colher de arroz rasa (38g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 20.0,
        "label": "Colher de sopa rasa (20g)"
      },
      {
        "measure": "Escumadeira média cháeia",
        "grams": 136.0,
        "label": "Escumadeira média cháeia (136g)"
      },
      {
        "measure": "Escumadeira média rasa",
        "grams": 90.0,
        "label": "Escumadeira média rasa (90g)"
      }
    ],
    "CHOCO CROC SUPERBOM": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 5.5,
        "label": "Colher de sopa cháeia (5.5g)"
      },
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 47.0,
        "label": "Copo duplo (240ml) (240ml) (47g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 36.0,
        "label": "Copo pequeno (165ml) (36g)"
      },
      {
        "measure": "Pacoteg",
        "grams": 300.0,
        "label": "Pacoteg (300g)"
      },
      {
        "measure": "Punhado",
        "grams": 13.0,
        "label": "Punhado (13g)"
      }
    ],
    "KELLOGG S": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 350.0,
        "label": "Copo pequeno (165ml) (350g)"
      },
      {
        "measure": "Pacote G",
        "grams": 320.0,
        "label": "Pacote G (320g)"
      },
      {
        "measure": "Ptrchá",
        "grams": 35.0,
        "label": "Ptrchá (35g)"
      },
      {
        "measure": "Punhado",
        "grams": 60.0,
        "label": "Punhado (60g)"
      },
      {
        "measure": "Bombom",
        "grams": 130.0,
        "label": "Bombom (130g)"
      },
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 51.0,
        "label": "Copo duplo (240ml) (240ml) (51g)"
      },
      {
        "measure": "Pacotep",
        "grams": 35.0,
        "label": "Pacotep (35g)"
      },
      {
        "measure": "Fatia grande",
        "grams": 90.0,
        "label": "Fatia grande (90g)"
      },
      {
        "measure": "Fatia média",
        "grams": 70.0,
        "label": "Fatia média (70g)"
      },
      {
        "measure": "Fatia pequena",
        "grams": 45.0,
        "label": "Fatia pequena (45g)"
      },
      {
        "measure": "Pacoteg",
        "grams": 200.0,
        "label": "Pacoteg (200g)"
      },
      {
        "measure": "Pacote P",
        "grams": 250.0,
        "label": "Pacote P (250g)"
      },
      {
        "measure": "Medida",
        "grams": 44.0,
        "label": "Medida (44g)"
      }
    ],
    "AMARGO NESTLE": [
      {
        "measure": "Barra G",
        "grams": 200.0,
        "label": "Barra G (200g)"
      }
    ],
    "E CAJU NESTLE": [
      {
        "measure": "Barrag",
        "grams": 180.0,
        "label": "Barrag (180g)"
      },
      {
        "measure": "Barra P",
        "grams": 40.0,
        "label": "Barra P (40g)"
      },
      {
        "measure": "Unidade",
        "grams": 320.0,
        "label": "Unidade (320g)"
      }
    ],
    "CHOCOLATE COM LEITE E": [
      {
        "measure": "Barra P",
        "grams": 300.0,
        "label": "Barra P (300g)"
      },
      {
        "measure": "Barra G",
        "grams": 180.0,
        "label": "Barra G (180g)"
      },
      {
        "measure": "Bombom",
        "grams": 95.0,
        "label": "Bombom (95g)"
      }
    ],
    "NEGRO": [
      {
        "measure": "Barra P",
        "grams": 300.0,
        "label": "Barra P (300g)"
      }
    ],
    "CHOCOLATE EM PO": [
      {
        "measure": "Col Caféé Ch",
        "grams": 20.0,
        "label": "Col Caféé Ch (20g)"
      },
      {
        "measure": "Colher de cháá cháeia",
        "grams": 4.0,
        "label": "Colher de cháá cháeia (4g)"
      },
      {
        "measure": "Colher de cháá rasa",
        "grams": 5.0,
        "label": "Colher de cháá rasa (5g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 15.0,
        "label": "Colher de sopa cháeia (15g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 10.0,
        "label": "Colher de sopa rasa (10g)"
      },
      {
        "measure": "Pote",
        "grams": 210.0,
        "label": "Pote (210g)"
      },
      {
        "measure": "Barra G",
        "grams": 200.0,
        "label": "Barra G (200g)"
      },
      {
        "measure": "Barra P",
        "grams": 30.0,
        "label": "Barra P (30g)"
      }
    ],
    "CHOCOLATE LAKA": [
      {
        "measure": "Barra G",
        "grams": 200.0,
        "label": "Barra G (200g)"
      },
      {
        "measure": "Barra P",
        "grams": 30.0,
        "label": "Barra P (30g)"
      },
      {
        "measure": "Unidade",
        "grams": 30.0,
        "label": "Unidade (30g)"
      }
    ],
    "BRANCO": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 65.0,
        "label": "Colher de arroz cháeia (65g)"
      },
      {
        "measure": "Escumadeira média cháeia",
        "grams": 80.0,
        "label": "Escumadeira média cháeia (80g)"
      },
      {
        "measure": "Colher de sopa rasa picado(a)",
        "grams": 15.0,
        "label": "Colher de sopa rasa picado(a) (15g)"
      },
      {
        "measure": "Escumadeira média cháeia picado(a)",
        "grams": 110.0,
        "label": "Escumadeira média cháeia picado(a) (110g)"
      },
      {
        "measure": "Pedaço médio",
        "grams": 30.0,
        "label": "Pedaço médio (30g)"
      },
      {
        "measure": "Unidade grande",
        "grams": 310.0,
        "label": "Unidade grande (310g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 145.0,
        "label": "Unidade pequena (145g)"
      }
    ],
    "CHUCHU REFOGADO": [
      {
        "measure": "Colher de sopa rasa picado(a)",
        "grams": 15.0,
        "label": "Colher de sopa rasa picado(a) (15g)"
      }
    ],
    "DE PANELA": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 15.0,
        "label": "Colher de sopa rasa (15g)"
      }
    ],
    "COCA COLA": [
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 165.0,
        "label": "Copo pequeno (165ml) (165g)"
      },
      {
        "measure": "Lata",
        "grams": 350.0,
        "label": "Lata (350g)"
      }
    ],
    "COCADA": [
      {
        "measure": "Unidade média",
        "grams": 70.0,
        "label": "Unidade média (70g)"
      }
    ],
    "COCO DA BAIA": [
      {
        "measure": "Pedaço grande",
        "grams": 75.0,
        "label": "Pedaço grande (75g)"
      },
      {
        "measure": "Pedaço médio",
        "grams": 400.0,
        "label": "Pedaço médio (400g)"
      },
      {
        "measure": "Pedaço pequeno",
        "grams": 150.0,
        "label": "Pedaço pequeno (150g)"
      },
      {
        "measure": "Unidade média",
        "grams": 325.0,
        "label": "Unidade média (325g)"
      }
    ],
    "COCO RALADO INDUSTR": [
      {
        "measure": "Colher de cháá cháeia",
        "grams": 15.0,
        "label": "Colher de cháá cháeia (15g)"
      },
      {
        "measure": "Colher de cháá rasa",
        "grams": 10.0,
        "label": "Colher de cháá rasa (10g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 25.0,
        "label": "Colher de sopa rasa (25g)"
      },
      {
        "measure": "Colher de sobremesa rasa",
        "grams": 15.0,
        "label": "Colher de sobremesa rasa (15g)"
      },
      {
        "measure": "Pacote",
        "grams": 50.0,
        "label": "Pacote (50g)"
      }
    ],
    "CONSERVA": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 40.0,
        "label": "Colher de arroz cháeia (40g)"
      },
      {
        "measure": "Colher de arroz rasa",
        "grams": 33.0,
        "label": "Colher de arroz rasa (33g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 27.0,
        "label": "Colher de sopa cháeia (27g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 16.0,
        "label": "Colher de sopa rasa (16g)"
      },
      {
        "measure": "Escumadeira média",
        "grams": 75.0,
        "label": "Escumadeira média (75g)"
      },
      {
        "measure": "Unidade grande",
        "grams": 50.0,
        "label": "Unidade grande (50g)"
      },
      {
        "measure": "Unidade média",
        "grams": 30.0,
        "label": "Unidade média (30g)"
      }
    ],
    "COM NUTRIFERRO": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 30.0,
        "label": "Copo duplo (240ml) (240ml) (30g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 250.0,
        "label": "Copo pequeno (165ml) (250g)"
      },
      {
        "measure": "Pacoteg",
        "grams": 200.0,
        "label": "Pacoteg (200g)"
      },
      {
        "measure": "Pacotep",
        "grams": 200.0,
        "label": "Pacotep (200g)"
      },
      {
        "measure": "Punhado",
        "grams": 90.0,
        "label": "Punhado (90g)"
      },
      {
        "measure": "Pedaço grande",
        "grams": 60.0,
        "label": "Pedaço grande (60g)"
      },
      {
        "measure": "Pedaço médio",
        "grams": 40.0,
        "label": "Pedaço médio (40g)"
      },
      {
        "measure": "Pedaço pequeno",
        "grams": 30.0,
        "label": "Pedaço pequeno (30g)"
      },
      {
        "measure": "Unidade grande",
        "grams": 40.0,
        "label": "Unidade grande (40g)"
      },
      {
        "measure": "Unidade média",
        "grams": 250.0,
        "label": "Unidade média (250g)"
      },
      {
        "measure": "Colsrpicada",
        "grams": 10.0,
        "label": "Colsrpicada (10g)"
      },
      {
        "measure": "Folha média",
        "grams": 250.0,
        "label": "Folha média (250g)"
      },
      {
        "measure": "Folhap",
        "grams": 170.0,
        "label": "Folhap (170g)"
      }
    ],
    "COUVE FLOR A MILANESA": [
      {
        "measure": "Ramo G",
        "grams": 140.0,
        "label": "Ramo G (140g)"
      },
      {
        "measure": "Colher de sopa cháeia picado(a)",
        "grams": 25.0,
        "label": "Colher de sopa cháeia picado(a) (25g)"
      },
      {
        "measure": "Colher de sopa rasa Picada",
        "grams": 15.0,
        "label": "Colher de sopa rasa Picada (15g)"
      }
    ],
    "RAMO G": [
      {
        "measure": "Ramo M",
        "grams": 60.0,
        "label": "Ramo M (60g)"
      },
      {
        "measure": "Unidade grande",
        "grams": 800.0,
        "label": "Unidade grande (800g)"
      }
    ],
    "COXINHA DE GALINHA": [
      {
        "measure": "Unidade média",
        "grams": 50.0,
        "label": "Unidade média (50g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 25.0,
        "label": "Unidade pequena (25g)"
      },
      {
        "measure": "Gq/Cream Cracker",
        "grams": 75.0,
        "label": "Gq/Cream Cracker (75g)"
      },
      {
        "measure": "Gqipão De Forma",
        "grams": 150.0,
        "label": "Gqipão De Forma (150g)"
      },
      {
        "measure": "Gq/Pão Francês",
        "grams": 150.0,
        "label": "Gq/Pão Francês (150g)"
      },
      {
        "measure": "Mq/Cream Cracker",
        "grams": 35.0,
        "label": "Mq/Cream Cracker (35g)"
      },
      {
        "measure": "Mq/Pão De Forma",
        "grams": 90.0,
        "label": "Mq/Pão De Forma (90g)"
      },
      {
        "measure": "Mq/Pão Francês",
        "grams": 90.0,
        "label": "Mq/Pão Francês (90g)"
      },
      {
        "measure": "Pq/Cream Cracker",
        "grams": 15.0,
        "label": "Pq/Cream Cracker (15g)"
      },
      {
        "measure": "Pq/Pão De Forma",
        "grams": 40.0,
        "label": "Pq/Pão De Forma (40g)"
      },
      {
        "measure": "Pq/Pão Francês",
        "grams": 40.0,
        "label": "Pq/Pão Francês (40g)"
      }
    ],
    "DANUBIO": [
      {
        "measure": "Gq/Cream Cracker",
        "grams": 75.0,
        "label": "Gq/Cream Cracker (75g)"
      },
      {
        "measure": "Gq/Pão De Forma",
        "grams": 150.0,
        "label": "Gq/Pão De Forma (150g)"
      },
      {
        "measure": "Gq/Pão Francês",
        "grams": 150.0,
        "label": "Gq/Pão Francês (150g)"
      },
      {
        "measure": "Mq/Cream Cracker",
        "grams": 35.0,
        "label": "Mq/Cream Cracker (35g)"
      },
      {
        "measure": "Mq/Pão De Forma",
        "grams": 90.0,
        "label": "Mq/Pão De Forma (90g)"
      },
      {
        "measure": "Mq/Pão Francês",
        "grams": 90.0,
        "label": "Mq/Pão Francês (90g)"
      },
      {
        "measure": "Pote",
        "grams": 200.0,
        "label": "Pote (200g)"
      },
      {
        "measure": "Pq/Cream Cracker",
        "grams": 15.0,
        "label": "Pq/Cream Cracker (15g)"
      },
      {
        "measure": "Pq/Pão De Forma",
        "grams": 40.0,
        "label": "Pq/Pão De Forma (40g)"
      },
      {
        "measure": "Pq/Pão Francês",
        "grams": 40.0,
        "label": "Pq/Pão Francês (40g)"
      },
      {
        "measure": "Col",
        "grams": 3.0,
        "label": "Col (3g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 15.0,
        "label": "Colher de sopa rasa (15g)"
      }
    ],
    "CASEIRO": [
      {
        "measure": "Colher de cháá cháeia",
        "grams": 5.0,
        "label": "Colher de cháá cháeia (5g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 15.0,
        "label": "Colher de sopa rasa (15g)"
      }
    ],
    "CREME DE ABACATE": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 250.0,
        "label": "Copo duplo (240ml) (240ml) (250g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 180.0,
        "label": "Copo pequeno (165ml) (180g)"
      },
      {
        "measure": "Copo Sorvete Ch",
        "grams": 90.0,
        "label": "Copo Sorvete Ch (90g)"
      },
      {
        "measure": "Copo Sorvete R",
        "grams": 700.0,
        "label": "Copo Sorvete R (700g)"
      },
      {
        "measure": "Prato fundo",
        "grams": 750.0,
        "label": "Prato fundo (750g)"
      },
      {
        "measure": "Prato raso",
        "grams": 500.0,
        "label": "Prato raso (500g)"
      },
      {
        "measure": "Col Caféé Ch",
        "grams": 40.0,
        "label": "Col Caféé Ch (40g)"
      },
      {
        "measure": "Col Caféé R",
        "grams": 20.0,
        "label": "Col Caféé R (20g)"
      },
      {
        "measure": "Colher de cháá cháeia",
        "grams": 8.0,
        "label": "Colher de cháá cháeia (8g)"
      },
      {
        "measure": "Colher de cháá rasa",
        "grams": 4.0,
        "label": "Colher de cháá rasa (4g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 20.0,
        "label": "Colher de sopa rasa (20g)"
      },
      {
        "measure": "Embalagem Comercial",
        "grams": 250.0,
        "label": "Embalagem Comercial (250g)"
      },
      {
        "measure": "Gq/Cream Cracker",
        "grams": 70.0,
        "label": "Gq/Cream Cracker (70g)"
      },
      {
        "measure": "Gq/Pão De Forma",
        "grams": 270.0,
        "label": "Gq/Pão De Forma (270g)"
      },
      {
        "measure": "Gq/Pão Francês",
        "grams": 300.0,
        "label": "Gq/Pão Francês (300g)"
      },
      {
        "measure": "Mq/Cream Cracker",
        "grams": 40.0,
        "label": "Mq/Cream Cracker (40g)"
      },
      {
        "measure": "Mq/Pão De Forma",
        "grams": 120.0,
        "label": "Mq/Pão De Forma (120g)"
      },
      {
        "measure": "Mq/Pão Francês",
        "grams": 20.0,
        "label": "Mq/Pão Francês (20g)"
      },
      {
        "measure": "Pq/Cream Cracker",
        "grams": 20.0,
        "label": "Pq/Cream Cracker (20g)"
      },
      {
        "measure": "Pq/Pão De Forma",
        "grams": 70.0,
        "label": "Pq/Pão De Forma (70g)"
      },
      {
        "measure": "Pq/Pão Francês",
        "grams": 1060.0,
        "label": "Pq/Pão Francês (1060g)"
      }
    ],
    "CREME DE ESPINAFRE": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 76.0,
        "label": "Colher de arroz cháeia (76g)"
      },
      {
        "measure": "Colher de arroz rasa",
        "grams": 60.0,
        "label": "Colher de arroz rasa (60g)"
      },
      {
        "measure": "Í Colher de sopa cháeia",
        "grams": 35.0,
        "label": "Í Colher de sopa cháeia (35g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 25.0,
        "label": "Colher de sopa rasa (25g)"
      },
      {
        "measure": "Escumadeira média cháeia",
        "grams": 114.0,
        "label": "Escumadeira média cháeia (114g)"
      },
      {
        "measure": "Lata",
        "grams": 300.0,
        "label": "Lata (300g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 33.0,
        "label": "Colher de sopa cháeia (33g)"
      }
    ],
    "MORANGO": [
      {
        "measure": "Colher de cháá cháeia",
        "grams": 4.0,
        "label": "Colher de cháá cháeia (4g)"
      },
      {
        "measure": "Colcháár",
        "grams": 25.0,
        "label": "Colcháár (25g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 20.0,
        "label": "Colher de sopa cháeia (20g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 25.0,
        "label": "Colher de sopa rasa (25g)"
      },
      {
        "measure": "Unidade",
        "grams": 1040.0,
        "label": "Unidade (1040g)"
      }
    ],
    "TRADICIONAL": [
      {
        "measure": "Colher de cháá cháeia",
        "grams": 4.0,
        "label": "Colher de cháá cháeia (4g)"
      },
      {
        "measure": "Colher de cháá rasa",
        "grams": 5.0,
        "label": "Colher de cháá rasa (5g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 20.0,
        "label": "Colher de sopa cháeia (20g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 25.0,
        "label": "Colher de sopa rasa (25g)"
      },
      {
        "measure": "Unidade grande",
        "grams": 670.0,
        "label": "Unidade grande (670g)"
      },
      {
        "measure": "Unidade média",
        "grams": 400.0,
        "label": "Unidade média (400g)"
      }
    ],
    "CROQUETE DE CARNE": [
      {
        "measure": "Unidade grande",
        "grams": 55.0,
        "label": "Unidade grande (55g)"
      },
      {
        "measure": "Unidade média",
        "grams": 250.0,
        "label": "Unidade média (250g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 100.0,
        "label": "Unidade pequena (100g)"
      }
    ],
    "CURRY": [
      {
        "measure": "Col Chá",
        "grams": 20.0,
        "label": "Col Chá (20g)"
      },
      {
        "measure": "Cols",
        "grams": 90.0,
        "label": "Cols (90g)"
      }
    ],
    "CUSCUZ DE MILHO": [
      {
        "measure": "Pedaço grande",
        "grams": 200.0,
        "label": "Pedaço grande (200g)"
      },
      {
        "measure": "Pedaço médio",
        "grams": 135.0,
        "label": "Pedaço médio (135g)"
      },
      {
        "measure": "Pedaço pequeno",
        "grams": 85.0,
        "label": "Pedaço pequeno (85g)"
      }
    ],
    "COM LEITE": [
      {
        "measure": "Pedaço grande",
        "grams": 270.0,
        "label": "Pedaço grande (270g)"
      },
      {
        "measure": "Pedaço médio",
        "grams": 180.0,
        "label": "Pedaço médio (180g)"
      },
      {
        "measure": "Pedaço pequeno",
        "grams": 115.0,
        "label": "Pedaço pequeno (115g)"
      }
    ],
    "CUSCUZ DE TAPIOCA": [
      {
        "measure": "Fatia grande",
        "grams": 200.0,
        "label": "Fatia grande (200g)"
      },
      {
        "measure": "Unidade",
        "grams": 7.0,
        "label": "Unidade (7g)"
      }
    ],
    "DANONINHO": [
      {
        "measure": "Potinho",
        "grams": 45.0,
        "label": "Potinho (45g)"
      },
      {
        "measure": "Pote Maxi",
        "grams": 65.0,
        "label": "Pote Maxi (65g)"
      },
      {
        "measure": "Potinho Maxi",
        "grams": 65.0,
        "label": "Potinho Maxi (65g)"
      }
    ],
    "NUTRICEREAIS": [
      {
        "measure": "Potinho",
        "grams": 45.0,
        "label": "Potinho (45g)"
      },
      {
        "measure": "Unidade",
        "grams": 200.0,
        "label": "Unidade (200g)"
      }
    ],
    "DIET SHAKE BAUNILHA": [
      {
        "measure": "Porção",
        "grams": 30.0,
        "label": "Porção (30g)"
      }
    ],
    "DOBRADINHA": [
      {
        "measure": "Colher de arroz rasa",
        "grams": 45.0,
        "label": "Colher de arroz rasa (45g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 35.0,
        "label": "Colher de sopa cháeia (35g)"
      }
    ],
    "CALDA": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Unidade grande",
        "grams": 300.0,
        "label": "Unidade grande (300g)"
      },
      {
        "measure": "Unidade média",
        "grams": 150.0,
        "label": "Unidade média (150g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 25.0,
        "label": "Colher de sopa rasa (25g)"
      }
    ],
    "EM CALDA": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 165.0,
        "label": "Copo pequeno (165ml) (165g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 5.0,
        "label": "Colher de sopa cháeia (5g)"
      }
    ],
    "DOCE DE LEITE": [
      {
        "measure": "Barra M",
        "grams": 35.0,
        "label": "Barra M (35g)"
      },
      {
        "measure": "Col Caféé Ch",
        "grams": 80.0,
        "label": "Col Caféé Ch (80g)"
      },
      {
        "measure": "Colher de cháá cháeia",
        "grams": 12.0,
        "label": "Colher de cháá cháeia (12g)"
      },
      {
        "measure": "Colher de cháá rasa",
        "grams": 8.0,
        "label": "Colher de cháá rasa (8g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 25.0,
        "label": "Colher de sopa rasa (25g)"
      },
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 270.0,
        "label": "Copo duplo (240ml) (240ml) (270g)"
      },
      {
        "measure": "Porção M",
        "grams": 50.0,
        "label": "Porção M (50g)"
      }
    ],
    "DOCE DE MAMAO VERDE": [
      {
        "measure": "Colher de cháá cháeia",
        "grams": 12.0,
        "label": "Colher de cháá cháeia (12g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Pires",
        "grams": 150.0,
        "label": "Pires (150g)"
      },
      {
        "measure": "Prato de sobremesa",
        "grams": 250.0,
        "label": "Prato de sobremesa (250g)"
      }
    ],
    "DOCE DE NOZES": [
      {
        "measure": "Colher de cháá cháeia",
        "grams": 15.0,
        "label": "Colher de cháá cháeia (15g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      }
    ],
    "EGGBURGUER": [
      {
        "measure": "Unidade",
        "grams": 175.0,
        "label": "Unidade (175g)"
      }
    ],
    "EGGCHEESEBURGUER": [
      {
        "measure": "Unidade",
        "grams": 190.0,
        "label": "Unidade (190g)"
      }
    ],
    "EMPADA": [
      {
        "measure": "Unidade pequena",
        "grams": 12.0,
        "label": "Unidade pequena (12g)"
      }
    ],
    "EMPADAO": [
      {
        "measure": "Fatia média",
        "grams": 110.0,
        "label": "Fatia média (110g)"
      }
    ],
    "DE SALSICHA": [
      {
        "measure": "Unidade média",
        "grams": 27.0,
        "label": "Unidade média (27g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 18.0,
        "label": "Unidade pequena (18g)"
      }
    ],
    "COM CENOURA": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 15.0,
        "label": "Colher de sopa rasa (15g)"
      }
    ],
    "ERVILHA ENLATADA": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 38.0,
        "label": "Colher de arroz cháeia (38g)"
      },
      {
        "measure": "Colher de arroz rasa",
        "grams": 27.0,
        "label": "Colher de arroz rasa (27g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 16.0,
        "label": "Colher de sopa rasa (16g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 13.0,
        "label": "Colher de sopa cháeia (13g)"
      },
      {
        "measure": "Colher de sobremesa rasa",
        "grams": 9.0,
        "label": "Colher de sobremesa rasa (9g)"
      }
    ],
    "ERVILHA VAGEM COZIDA": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 30.0,
        "label": "Colher de sopa cháeia (30g)"
      }
    ],
    "REFOGADA": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 60.0,
        "label": "Colher de arroz cháeia (60g)"
      }
    ],
    "ESPINAFRE REFOGADO": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 165.0,
        "label": "Copo pequeno (165ml) (165g)"
      },
      {
        "measure": "Garrafa M",
        "grams": 290.0,
        "label": "Garrafa M (290g)"
      },
      {
        "measure": "Lata",
        "grams": 350.0,
        "label": "Lata (350g)"
      }
    ],
    "FARELO DE TRIGO": [
      {
        "measure": "Col Caféé Ch",
        "grams": 10.0,
        "label": "Col Caféé Ch (10g)"
      },
      {
        "measure": "Colher de cháá cháeia",
        "grams": 5.0,
        "label": "Colher de cháá cháeia (5g)"
      },
      {
        "measure": "Colher de sopa cháeia Ú",
        "grams": 25.0,
        "label": "Colher de sopa cháeia Ú (25g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 25.0,
        "label": "Colher de sopa rasa (25g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      }
    ],
    "FARINHA DE ARROZ": [
      {
        "measure": "Colher de cháá cháeia",
        "grams": 4.0,
        "label": "Colher de cháá cháeia (4g)"
      },
      {
        "measure": "Colher de cháá rasa",
        "grams": 5.0,
        "label": "Colher de cháá rasa (5g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 17.0,
        "label": "Colher de sopa cháeia (17g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 10.0,
        "label": "Colher de sopa rasa (10g)"
      }
    ],
    "FARINHA DE MANDIOCA": [
      {
        "measure": "Colher de cháá cháeia",
        "grams": 5.0,
        "label": "Colher de cháá cháeia (5g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 16.0,
        "label": "Colher de sopa cháeia (16g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 12.0,
        "label": "Colher de sopa rasa (12g)"
      }
    ],
    "FARINHA DE ROSCA": [
      {
        "measure": "Coes Ch",
        "grams": 150.0,
        "label": "Coes Ch (150g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 10.0,
        "label": "Colher de sopa rasa (10g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 10.0,
        "label": "Colher de sopa cháeia (10g)"
      }
    ],
    "FARINHA DE TRIGO": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 20.0,
        "label": "Colher de sopa cháeia (20g)"
      }
    ],
    "FARINHA LACTEA": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 20.0,
        "label": "Colher de sopa cháeia (20g)"
      },
      {
        "measure": "Colher de arroz cháeia",
        "grams": 35.0,
        "label": "Colher de arroz cháeia (35g)"
      },
      {
        "measure": "Colher de arroz rasa",
        "grams": 22.0,
        "label": "Colher de arroz rasa (22g)"
      },
      {
        "measure": "Colher de cháá cháeia",
        "grams": 5.0,
        "label": "Colher de cháá cháeia (5g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 10.0,
        "label": "Colher de sopa rasa (10g)"
      },
      {
        "measure": "Escumadeira média cháeia",
        "grams": 58.0,
        "label": "Escumadeira média cháeia (58g)"
      },
      {
        "measure": "Escumadeira média rasa",
        "grams": 35.0,
        "label": "Escumadeira média rasa (35g)"
      }
    ],
    "FAROFA COM LINGUICA": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 15.0,
        "label": "Colher de sopa cháeia (15g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 10.0,
        "label": "Colher de sopa rasa (10g)"
      }
    ],
    "FEIJAO BRANCO COZIDO": [
      {
        "measure": "Concháa média cháeia",
        "grams": 140.0,
        "label": "Concháa média cháeia (140g)"
      },
      {
        "measure": "Concháa média rasa",
        "grams": 80.0,
        "label": "Concháa média rasa (80g)"
      },
      {
        "measure": "Concháa pequena cháeia",
        "grams": 65.0,
        "label": "Concháa pequena cháeia (65g)"
      },
      {
        "measure": "Concháa pequena rasa",
        "grams": 40.0,
        "label": "Concháa pequena rasa (40g)"
      },
      {
        "measure": "Colher de arroz cháeia",
        "grams": 35.0,
        "label": "Colher de arroz cháeia (35g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 17.0,
        "label": "Colher de sopa cháeia (17g)"
      }
    ],
    "FEIJOADA CASEIRA": [
      {
        "measure": "Concháa média cháeia",
        "grams": 225.0,
        "label": "Concháa média cháeia (225g)"
      }
    ],
    "FERMENTO EM PO": [
      {
        "measure": "Colher de cháá cháeia",
        "grams": 5.0,
        "label": "Colher de cháá cháeia (5g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 10.0,
        "label": "Colher de sopa rasa (10g)"
      }
    ],
    "FLA DE CHOCOLATE": [
      {
        "measure": "Unidade grande",
        "grams": 45.0,
        "label": "Unidade grande (45g)"
      },
      {
        "measure": "Unidade média",
        "grams": 300.0,
        "label": "Unidade média (300g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 250.0,
        "label": "Unidade pequena (250g)"
      }
    ],
    "FIGO": [
      {
        "measure": "Unidade grande",
        "grams": 70.0,
        "label": "Unidade grande (70g)"
      },
      {
        "measure": "Unidade média",
        "grams": 55.0,
        "label": "Unidade média (55g)"
      },
      {
        "measure": "Filég",
        "grams": 190.0,
        "label": "Filég (190g)"
      },
      {
        "measure": "Filé M",
        "grams": 140.0,
        "label": "Filé M (140g)"
      }
    ],
    "FILEP": [
      {
        "measure": "Postag",
        "grams": 250.0,
        "label": "Postag (250g)"
      },
      {
        "measure": "Posta M",
        "grams": 200.0,
        "label": "Posta M (200g)"
      },
      {
        "measure": "Postap",
        "grams": 150.0,
        "label": "Postap (150g)"
      }
    ],
    "PARDO": [
      {
        "measure": "Asag",
        "grams": 55.0,
        "label": "Asag (55g)"
      },
      {
        "measure": "Asam",
        "grams": 40.0,
        "label": "Asam (40g)"
      },
      {
        "measure": "Asap",
        "grams": 30.0,
        "label": "Asap (30g)"
      },
      {
        "measure": "Costelag",
        "grams": 90.0,
        "label": "Costelag (90g)"
      },
      {
        "measure": "Costela M",
        "grams": 60.0,
        "label": "Costela M (60g)"
      },
      {
        "measure": "Costelap",
        "grams": 50.0,
        "label": "Costelap (50g)"
      },
      {
        "measure": "Coxag",
        "grams": 55.0,
        "label": "Coxag (55g)"
      },
      {
        "measure": "Coxa M",
        "grams": 40.0,
        "label": "Coxa M (40g)"
      },
      {
        "measure": "Coxap",
        "grams": 30.0,
        "label": "Coxap (30g)"
      },
      {
        "measure": "Peitog",
        "grams": 270.0,
        "label": "Peitog (270g)"
      },
      {
        "measure": "Peito M",
        "grams": 180.0,
        "label": "Peito M (180g)"
      },
      {
        "measure": "Peito P",
        "grams": 140.0,
        "label": "Peito P (140g)"
      },
      {
        "measure": "Pescoço G",
        "grams": 15.0,
        "label": "Pescoço G (15g)"
      },
      {
        "measure": "Pescoço M",
        "grams": 10.0,
        "label": "Pescoço M (10g)"
      },
      {
        "measure": "Pescoço P",
        "grams": 80.0,
        "label": "Pescoço P (80g)"
      },
      {
        "measure": "Sobrecoxa G",
        "grams": 95.0,
        "label": "Sobrecoxa G (95g)"
      },
      {
        "measure": "Sobrecoxa M",
        "grams": 65.0,
        "label": "Sobrecoxa M (65g)"
      },
      {
        "measure": "Sobrecoxa P",
        "grams": 50.0,
        "label": "Sobrecoxa P (50g)"
      }
    ],
    "FRANGO ASSADO": [
      {
        "measure": "Asag",
        "grams": 55.0,
        "label": "Asag (55g)"
      },
      {
        "measure": "Asam",
        "grams": 40.0,
        "label": "Asam (40g)"
      },
      {
        "measure": "Asap",
        "grams": 30.0,
        "label": "Asap (30g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 20.0,
        "label": "Colher de sopa cháeia (20g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 10.0,
        "label": "Colher de sopa rasa (10g)"
      },
      {
        "measure": "Costelag",
        "grams": 90.0,
        "label": "Costelag (90g)"
      },
      {
        "measure": "Costela M",
        "grams": 60.0,
        "label": "Costela M (60g)"
      },
      {
        "measure": "Costelap",
        "grams": 50.0,
        "label": "Costelap (50g)"
      },
      {
        "measure": "Coxa G",
        "grams": 55.0,
        "label": "Coxa G (55g)"
      },
      {
        "measure": "Coxa M",
        "grams": 40.0,
        "label": "Coxa M (40g)"
      },
      {
        "measure": "Coxap",
        "grams": 30.0,
        "label": "Coxap (30g)"
      },
      {
        "measure": "Peito G",
        "grams": 270.0,
        "label": "Peito G (270g)"
      },
      {
        "measure": "Peito M",
        "grams": 180.0,
        "label": "Peito M (180g)"
      },
      {
        "measure": "Peito P",
        "grams": 140.0,
        "label": "Peito P (140g)"
      },
      {
        "measure": "Pescoço G",
        "grams": 15.0,
        "label": "Pescoço G (15g)"
      },
      {
        "measure": "Pescoço M",
        "grams": 10.0,
        "label": "Pescoço M (10g)"
      },
      {
        "measure": "Pescoço P",
        "grams": 80.0,
        "label": "Pescoço P (80g)"
      },
      {
        "measure": "Sobrecoxa G",
        "grams": 95.0,
        "label": "Sobrecoxa G (95g)"
      },
      {
        "measure": "Sobrecoxa M",
        "grams": 65.0,
        "label": "Sobrecoxa M (65g)"
      },
      {
        "measure": "Sobrecoxa P",
        "grams": 50.0,
        "label": "Sobrecoxa P (50g)"
      },
      {
        "measure": "Unidade média",
        "grams": 16.0,
        "label": "Unidade média (16g)"
      }
    ],
    "JFRANGO ENSOPADO": [
      {
        "measure": "Asag",
        "grams": 55.0,
        "label": "Asag (55g)"
      },
      {
        "measure": "Asam",
        "grams": 40.0,
        "label": "Asam (40g)"
      },
      {
        "measure": "Asap",
        "grams": 30.0,
        "label": "Asap (30g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 20.0,
        "label": "Colher de sopa cháeia (20g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 10.0,
        "label": "Colher de sopa rasa (10g)"
      },
      {
        "measure": "Costelag",
        "grams": 90.0,
        "label": "Costelag (90g)"
      },
      {
        "measure": "Costela M",
        "grams": 60.0,
        "label": "Costela M (60g)"
      },
      {
        "measure": "Costelap",
        "grams": 50.0,
        "label": "Costelap (50g)"
      },
      {
        "measure": "Coxa G",
        "grams": 55.0,
        "label": "Coxa G (55g)"
      },
      {
        "measure": "Coxam",
        "grams": 40.0,
        "label": "Coxam (40g)"
      },
      {
        "measure": "Coxap",
        "grams": 30.0,
        "label": "Coxap (30g)"
      },
      {
        "measure": "Peito G",
        "grams": 270.0,
        "label": "Peito G (270g)"
      },
      {
        "measure": "Peito M",
        "grams": 180.0,
        "label": "Peito M (180g)"
      },
      {
        "measure": "Peitop",
        "grams": 1400.0,
        "label": "Peitop (1400g)"
      },
      {
        "measure": "Pescoço G",
        "grams": 150.0,
        "label": "Pescoço G (150g)"
      },
      {
        "measure": "Pescoço M",
        "grams": 10.0,
        "label": "Pescoço M (10g)"
      },
      {
        "measure": "Pescoço P",
        "grams": 80.0,
        "label": "Pescoço P (80g)"
      },
      {
        "measure": "Sobrecoxa G",
        "grams": 95.0,
        "label": "Sobrecoxa G (95g)"
      },
      {
        "measure": "Sobrecoxa M",
        "grams": 650.0,
        "label": "Sobrecoxa M (650g)"
      },
      {
        "measure": "Sobrecoxa P",
        "grams": 50.0,
        "label": "Sobrecoxa P (50g)"
      },
      {
        "measure": "Unidade média",
        "grams": 160.0,
        "label": "Unidade média (160g)"
      }
    ],
    "FRANGO FRITO": [
      {
        "measure": "Asag",
        "grams": 550.0,
        "label": "Asag (550g)"
      },
      {
        "measure": "Asam",
        "grams": 400.0,
        "label": "Asam (400g)"
      },
      {
        "measure": "Asap",
        "grams": 300.0,
        "label": "Asap (300g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 10.0,
        "label": "Colher de sopa rasa (10g)"
      },
      {
        "measure": "Costela G",
        "grams": 90.0,
        "label": "Costela G (90g)"
      },
      {
        "measure": "Costela M",
        "grams": 60.0,
        "label": "Costela M (60g)"
      },
      {
        "measure": "Costelap",
        "grams": 500.0,
        "label": "Costelap (500g)"
      },
      {
        "measure": "Coxa G",
        "grams": 550.0,
        "label": "Coxa G (550g)"
      },
      {
        "measure": "Coxa M",
        "grams": 40.0,
        "label": "Coxa M (40g)"
      },
      {
        "measure": "Coxap",
        "grams": 300.0,
        "label": "Coxap (300g)"
      },
      {
        "measure": "Filêg",
        "grams": 170.0,
        "label": "Filêg (170g)"
      }
    ],
    "FILE M": [
      {
        "measure": "Filép",
        "grams": 70.0,
        "label": "Filép (70g)"
      },
      {
        "measure": "Peito M",
        "grams": 180.0,
        "label": "Peito M (180g)"
      },
      {
        "measure": "Pescoço G",
        "grams": 15.0,
        "label": "Pescoço G (15g)"
      },
      {
        "measure": "Pescoço M",
        "grams": 10.0,
        "label": "Pescoço M (10g)"
      },
      {
        "measure": "Pescoço P",
        "grams": 80.0,
        "label": "Pescoço P (80g)"
      },
      {
        "measure": "Sobrecoxa G",
        "grams": 95.0,
        "label": "Sobrecoxa G (95g)"
      },
      {
        "measure": "Sobrecoxa M",
        "grams": 65.0,
        "label": "Sobrecoxa M (65g)"
      },
      {
        "measure": "Sobrecoxa P",
        "grams": 500.0,
        "label": "Sobrecoxa P (500g)"
      },
      {
        "measure": "Unidade média",
        "grams": 160.0,
        "label": "Unidade média (160g)"
      }
    ],
    "FRUTA DE CONDE": [
      {
        "measure": "Unidade grande",
        "grams": 190.0,
        "label": "Unidade grande (190g)"
      },
      {
        "measure": "Unidade média",
        "grams": 600.0,
        "label": "Unidade média (600g)"
      }
    ],
    "FUBA": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 20.0,
        "label": "Colher de sopa cháeia (20g)"
      }
    ],
    "GELATINA EM FOLHA": [
      {
        "measure": "Unidade",
        "grams": 166.0,
        "label": "Unidade (166g)"
      }
    ],
    "GELATINA PREPARADA": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Unidade",
        "grams": 1100.0,
        "label": "Unidade (1100g)"
      }
    ],
    "DIET LINEA": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 34.0,
        "label": "Colher de sopa cháeia (34g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 22.0,
        "label": "Colher de sopa rasa (22g)"
      },
      {
        "measure": "Gq/Cream Cracker",
        "grams": 80.0,
        "label": "Gq/Cream Cracker (80g)"
      },
      {
        "measure": "Gq/Pão De Forma",
        "grams": 180.0,
        "label": "Gq/Pão De Forma (180g)"
      },
      {
        "measure": "Gq/Pão Francês",
        "grams": 220.0,
        "label": "Gq/Pão Francês (220g)"
      },
      {
        "measure": "Mq/Cream Cracker",
        "grams": 50.0,
        "label": "Mq/Cream Cracker (50g)"
      },
      {
        "measure": "Mq/Pão Francês",
        "grams": 130.0,
        "label": "Mq/Pão Francês (130g)"
      },
      {
        "measure": "Pq/Cream Cracker",
        "grams": 10.0,
        "label": "Pq/Cream Cracker (10g)"
      },
      {
        "measure": "Pq/Pão De Forma",
        "grams": 70.0,
        "label": "Pq/Pão De Forma (70g)"
      },
      {
        "measure": "Pq/Pão Francês",
        "grams": 50.0,
        "label": "Pq/Pão Francês (50g)"
      },
      {
        "measure": "Colher de cháá cháeia",
        "grams": 9.0,
        "label": "Colher de cháá cháeia (9g)"
      },
      {
        "measure": "Gqi/Cream Cracker Ex",
        "grams": 8.0,
        "label": "Gqi/Cream Cracker Ex (8g)"
      },
      {
        "measure": "Mq/Pão De Forma",
        "grams": 11.0,
        "label": "Mq/Pão De Forma (11g)"
      },
      {
        "measure": "Mqi/Pão Francês",
        "grams": 13.0,
        "label": "Mqi/Pão Francês (13g)"
      }
    ],
    "GELEIA DE FRUTA": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 320.0,
        "label": "Copo duplo (240ml) (240ml) (320g)"
      },
      {
        "measure": "Gqicream Cracker",
        "grams": 80.0,
        "label": "Gqicream Cracker (80g)"
      },
      {
        "measure": "Gq/Pão De Forma",
        "grams": 180.0,
        "label": "Gq/Pão De Forma (180g)"
      },
      {
        "measure": "Mq/Pão Francês",
        "grams": 130.0,
        "label": "Mq/Pão Francês (130g)"
      },
      {
        "measure": "Pq/Cream Cracker",
        "grams": 10.0,
        "label": "Pq/Cream Cracker (10g)"
      },
      {
        "measure": "Pq/Pão De Forma",
        "grams": 70.0,
        "label": "Pq/Pão De Forma (70g)"
      },
      {
        "measure": "Pq/Pão Francês",
        "grams": 5.0,
        "label": "Pq/Pão Francês (5g)"
      },
      {
        "measure": "Potinho",
        "grams": 200.0,
        "label": "Potinho (200g)"
      }
    ],
    "GELEIA DE MOCOTO": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 25.0,
        "label": "Colher de sopa rasa (25g)"
      }
    ],
    "GOIABA": [
      {
        "measure": "Unidade média",
        "grams": 170.0,
        "label": "Unidade média (170g)"
      }
    ],
    "GOIABADA": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 30.0,
        "label": "Colher de sopa rasa (30g)"
      },
      {
        "measure": "Fatia grande",
        "grams": 100.0,
        "label": "Fatia grande (100g)"
      },
      {
        "measure": "Fatia média",
        "grams": 60.0,
        "label": "Fatia média (60g)"
      },
      {
        "measure": "Fatia pequena",
        "grams": 40.0,
        "label": "Fatia pequena (40g)"
      }
    ],
    "GRAO DE BICO COZIDO": [
      {
        "measure": "Concháa média cháeia",
        "grams": 120.0,
        "label": "Concháa média cháeia (120g)"
      },
      {
        "measure": "Col Aà Ch",
        "grams": 45.0,
        "label": "Col Aà Ch (45g)"
      },
      {
        "measure": "Lata",
        "grams": 350.0,
        "label": "Lata (350g)"
      }
    ],
    "SANDUICHE": [
      {
        "measure": "Unidade média",
        "grams": 125.0,
        "label": "Unidade média (125g)"
      },
      {
        "measure": "Unidade",
        "grams": 85.0,
        "label": "Unidade (85g)"
      }
    ],
    "INHAME COZIDO": [
      {
        "measure": "Colher de arroz cháeia picado(a)",
        "grams": 62.0,
        "label": "Colher de arroz cháeia picado(a) (62g)"
      },
      {
        "measure": "Colher de arroz rasa picado(a)",
        "grams": 35.0,
        "label": "Colher de arroz rasa picado(a) (35g)"
      },
      {
        "measure": "Colher de sopa rasa picado(a)",
        "grams": 22.0,
        "label": "Colher de sopa rasa picado(a) (22g)"
      },
      {
        "measure": "Escumadeira média cháeia picado(a)",
        "grams": 110.0,
        "label": "Escumadeira média cháeia picado(a) (110g)"
      },
      {
        "measure": "Escumadeira média rasa picado(a)",
        "grams": 72.0,
        "label": "Escumadeira média rasa picado(a) (72g)"
      },
      {
        "measure": "Pedaço médio",
        "grams": 600.0,
        "label": "Pedaço médio (600g)"
      },
      {
        "measure": "Unidade média",
        "grams": 125.0,
        "label": "Unidade média (125g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 85.0,
        "label": "Unidade pequena (85g)"
      },
      {
        "measure": "Colher de sopa cháeia picado(a)",
        "grams": 17.0,
        "label": "Colher de sopa cháeia picado(a) (17g)"
      }
    ],
    "IOGURTE": [
      {
        "measure": "Unidade média",
        "grams": 200.0,
        "label": "Unidade média (200g)"
      },
      {
        "measure": "Unidade",
        "grams": 120.0,
        "label": "Unidade (120g)"
      }
    ],
    "DE PORCO": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 30.0,
        "label": "Colher de sopa cháeia (30g)"
      }
    ],
    "JACA": [
      {
        "measure": "Bago",
        "grams": 120.0,
        "label": "Bago (120g)"
      },
      {
        "measure": "Lptr",
        "grams": 300.0,
        "label": "Lptr (300g)"
      }
    ],
    "JILO COZIDO": [
      {
        "measure": "Colher de arroz rasa",
        "grams": 60.0,
        "label": "Colher de arroz rasa (60g)"
      },
      {
        "measure": "Escumadeira média rasa",
        "grams": 80.0,
        "label": "Escumadeira média rasa (80g)"
      },
      {
        "measure": "Unidade",
        "grams": 300.0,
        "label": "Unidade (300g)"
      }
    ],
    "JILO REFOGADO": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Escumadeira média rasa",
        "grams": 80.0,
        "label": "Escumadeira média rasa (80g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 180.0,
        "label": "Unidade pequena (180g)"
      },
      {
        "measure": "Cols",
        "grams": 150.0,
        "label": "Cols (150g)"
      },
      {
        "measure": "Col Sob",
        "grams": 90.0,
        "label": "Col Sob (90g)"
      }
    ],
    "KETCHUP": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 20.0,
        "label": "Colher de sopa cháeia (20g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 11.0,
        "label": "Colher de sopa rasa (11g)"
      },
      {
        "measure": "Kw",
        "grams": 1000.0,
        "label": "Kw (1000g)"
      },
      {
        "measure": "Unidade média",
        "grams": 760.0,
        "label": "Unidade média (760g)"
      },
      {
        "measure": "Unidade grande",
        "grams": 290.0,
        "label": "Unidade grande (290g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 90.0,
        "label": "Unidade pequena (90g)"
      }
    ],
    "LASANHA A BOLONHESA": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 50.0,
        "label": "Colher de arroz cháeia (50g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Escumadeira média cháeia",
        "grams": 170.0,
        "label": "Escumadeira média cháeia (170g)"
      },
      {
        "measure": "Pedaço grande",
        "grams": 250.0,
        "label": "Pedaço grande (250g)"
      },
      {
        "measure": "Pedaço médio",
        "grams": 190.0,
        "label": "Pedaço médio (190g)"
      },
      {
        "measure": "Pedaço pequeno",
        "grams": 1200.0,
        "label": "Pedaço pequeno (1200g)"
      },
      {
        "measure": "Porção",
        "grams": 500.0,
        "label": "Porção (500g)"
      },
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 165.0,
        "label": "Copo pequeno (165ml) (165g)"
      }
    ],
    "LEITE CONDENSADO": [
      {
        "measure": "Cola",
        "grams": 200.0,
        "label": "Cola (200g)"
      },
      {
        "measure": "Col Caféé",
        "grams": 10.0,
        "label": "Col Caféé (10g)"
      },
      {
        "measure": "Col Chá",
        "grams": 2.0,
        "label": "Col Chá (2g)"
      },
      {
        "measure": "Cols",
        "grams": 15.0,
        "label": "Cols (15g)"
      },
      {
        "measure": "Col Sob",
        "grams": 10.0,
        "label": "Col Sob (10g)"
      },
      {
        "measure": "Lata",
        "grams": 395.0,
        "label": "Lata (395g)"
      }
    ],
    "FRIALP": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 14.0,
        "label": "Colher de sopa cháeia (14g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 25.0,
        "label": "Colher de sopa rasa (25g)"
      }
    ],
    "EM PO SCABRA": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 14.0,
        "label": "Colher de sopa cháeia (14g)"
      },
      {
        "measure": "Colher de sobremesa rasa",
        "grams": 15.0,
        "label": "Colher de sobremesa rasa (15g)"
      }
    ],
    "INDUSTR": [
      {
        "measure": "Garrafa P",
        "grams": 200.0,
        "label": "Garrafa P (200g)"
      }
    ],
    "DESNATADO": [
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 165.0,
        "label": "Copo pequeno (165ml) (165g)"
      }
    ],
    "WDESENGORDURADO": [
      {
        "measure": "Colher de sopa rasa",
        "grams": 25.0,
        "label": "Colher de sopa rasa (25g)"
      }
    ],
    "PASTEURIZADO": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 165.0,
        "label": "Copo pequeno (165ml) (165g)"
      }
    ],
    "COM ABACATE": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      }
    ],
    "COM BANANA": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 165.0,
        "label": "Copo pequeno (165ml) (165g)"
      }
    ],
    "COM FRUTA E CEREAL": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      }
    ],
    "COMMACAEBANANA": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 165.0,
        "label": "Copo pequeno (165ml) (165g)"
      }
    ],
    "COM MAMAO": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 165.0,
        "label": "Copo pequeno (165ml) (165g)"
      }
    ],
    "LENTILHA COZIDA": [
      {
        "measure": "Concháa média cháeia",
        "grams": 160.0,
        "label": "Concháa média cháeia (160g)"
      }
    ],
    "COMR": [
      {
        "measure": "Cola",
        "grams": 32.0,
        "label": "Cola (32g)"
      },
      {
        "measure": "Cols",
        "grams": 18.0,
        "label": "Cols (18g)"
      }
    ],
    "LEVEDO DE CERVEJA": [
      {
        "measure": "Colher de cháá cháeia",
        "grams": 6.0,
        "label": "Colher de cháá cháeia (6g)"
      },
      {
        "measure": "Colher de cháá rasa",
        "grams": 3.0,
        "label": "Colher de cháá rasa (3g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 18.0,
        "label": "Colher de sopa rasa (18g)"
      }
    ],
    "LICOR": [
      {
        "measure": "Cálice",
        "grams": 40.0,
        "label": "Cálice (40g)"
      }
    ],
    "LIMONADA": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      }
    ],
    "ENSOPADA": [
      {
        "measure": "Fatia média",
        "grams": 300.0,
        "label": "Fatia média (300g)"
      },
      {
        "measure": "Unidade",
        "grams": 40.0,
        "label": "Unidade (40g)"
      },
      {
        "measure": "Colher de arroz cháeia picado(a)",
        "grams": 36.0,
        "label": "Colher de arroz cháeia picado(a) (36g)"
      },
      {
        "measure": "Colher de sopa cháeia picado(a)",
        "grams": 15.0,
        "label": "Colher de sopa cháeia picado(a) (15g)"
      },
      {
        "measure": "Gomo",
        "grams": 60.0,
        "label": "Gomo (60g)"
      },
      {
        "measure": "Unidade grande",
        "grams": 200.0,
        "label": "Unidade grande (200g)"
      },
      {
        "measure": "Unidade média",
        "grams": 1300.0,
        "label": "Unidade média (1300g)"
      }
    ],
    "BOLONHESA": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 50.0,
        "label": "Colher de arroz cháeia (50g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Escumadeira média cháeia",
        "grams": 110.0,
        "label": "Escumadeira média cháeia (110g)"
      },
      {
        "measure": "Pegador",
        "grams": 1100.0,
        "label": "Pegador (1100g)"
      },
      {
        "measure": "Pt Fchá",
        "grams": 400.0,
        "label": "Pt Fchá (400g)"
      },
      {
        "measure": "Ptfr",
        "grams": 280.0,
        "label": "Ptfr (280g)"
      },
      {
        "measure": "Ptrr",
        "grams": 200.0,
        "label": "Ptrr (200g)"
      }
    ],
    "E OLEO": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 50.0,
        "label": "Colher de arroz cháeia (50g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Escumadeira média cháeia",
        "grams": 110.0,
        "label": "Escumadeira média cháeia (110g)"
      },
      {
        "measure": "Escumadeira média rasa",
        "grams": 75.0,
        "label": "Escumadeira média rasa (75g)"
      },
      {
        "measure": "Garfada",
        "grams": 300.0,
        "label": "Garfada (300g)"
      },
      {
        "measure": "Pegador",
        "grams": 1100.0,
        "label": "Pegador (1100g)"
      },
      {
        "measure": "Prato fundo Ch",
        "grams": 400.0,
        "label": "Prato fundo Ch (400g)"
      },
      {
        "measure": "Ptfr",
        "grams": 280.0,
        "label": "Ptfr (280g)"
      },
      {
        "measure": "Ptrchá",
        "grams": 320.0,
        "label": "Ptrchá (320g)"
      },
      {
        "measure": "Ptrr",
        "grams": 200.0,
        "label": "Ptrr (200g)"
      },
      {
        "measure": "Ptfchá",
        "grams": 400.0,
        "label": "Ptfchá (400g)"
      }
    ],
    "MACARRAO COZIDO": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 50.0,
        "label": "Colher de arroz cháeia (50g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Escumadeira média cháeia",
        "grams": 110.0,
        "label": "Escumadeira média cháeia (110g)"
      },
      {
        "measure": "Escumadeira média rasa",
        "grams": 75.0,
        "label": "Escumadeira média rasa (75g)"
      },
      {
        "measure": "Garfada",
        "grams": 300.0,
        "label": "Garfada (300g)"
      },
      {
        "measure": "Pegador",
        "grams": 1100.0,
        "label": "Pegador (1100g)"
      },
      {
        "measure": "Pt Fchá",
        "grams": 400.0,
        "label": "Pt Fchá (400g)"
      },
      {
        "measure": "Ptfr",
        "grams": 280.0,
        "label": "Ptfr (280g)"
      },
      {
        "measure": "Ptrchá",
        "grams": 320.0,
        "label": "Ptrchá (320g)"
      },
      {
        "measure": "Prato raso Ch/Parafuso",
        "grams": 320.0,
        "label": "Prato raso Ch/Parafuso (320g)"
      },
      {
        "measure": "Ptrr",
        "grams": 200.0,
        "label": "Ptrr (200g)"
      }
    ],
    "MAIONESE CASEIRA": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 50.0,
        "label": "Colher de arroz cháeia (50g)"
      },
      {
        "measure": "Colher de cháá cháeia",
        "grams": 6.0,
        "label": "Colher de cháá cháeia (6g)"
      },
      {
        "measure": "Colher de cháá rasa",
        "grams": 5.0,
        "label": "Colher de cháá rasa (5g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 27.0,
        "label": "Colher de sopa cháeia (27g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 17.0,
        "label": "Colher de sopa rasa (17g)"
      },
      {
        "measure": "Gq/Cream Cracker",
        "grams": 30.0,
        "label": "Gq/Cream Cracker (30g)"
      },
      {
        "measure": "Gq/Pão Forma",
        "grams": 120.0,
        "label": "Gq/Pão Forma (120g)"
      },
      {
        "measure": "Gq/Pão Francês",
        "grams": 240.0,
        "label": "Gq/Pão Francês (240g)"
      },
      {
        "measure": "Mq/Cream Cracker",
        "grams": 20.0,
        "label": "Mq/Cream Cracker (20g)"
      },
      {
        "measure": "Mq/Pão De Forma",
        "grams": 80.0,
        "label": "Mq/Pão De Forma (80g)"
      },
      {
        "measure": "Mq/Pão Francês",
        "grams": 14.0,
        "label": "Mq/Pão Francês (14g)"
      },
      {
        "measure": "Pq/Cream Cracker",
        "grams": 10.0,
        "label": "Pq/Cream Cracker (10g)"
      },
      {
        "measure": "Pq/Pão De Forma",
        "grams": 40.0,
        "label": "Pq/Pão De Forma (40g)"
      },
      {
        "measure": "Pq/Pão Francês",
        "grams": 10.0,
        "label": "Pq/Pão Francês (10g)"
      }
    ],
    "INDUSTRIALIZADA": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 50.0,
        "label": "Colher de arroz cháeia (50g)"
      },
      {
        "measure": "Colher de arroz rasa",
        "grams": 35.0,
        "label": "Colher de arroz rasa (35g)"
      },
      {
        "measure": "Colher de cháá cháeia",
        "grams": 6.0,
        "label": "Colher de cháá cháeia (6g)"
      },
      {
        "measure": "Colher de cháá rasa",
        "grams": 5.0,
        "label": "Colher de cháá rasa (5g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 27.0,
        "label": "Colher de sopa cháeia (27g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 17.0,
        "label": "Colher de sopa rasa (17g)"
      },
      {
        "measure": "Colher de sobremesa rasa",
        "grams": 12.0,
        "label": "Colher de sobremesa rasa (12g)"
      },
      {
        "measure": "Gq/Cream Cracker",
        "grams": 30.0,
        "label": "Gq/Cream Cracker (30g)"
      },
      {
        "measure": "Gq/Pão De Forma",
        "grams": 120.0,
        "label": "Gq/Pão De Forma (120g)"
      },
      {
        "measure": "Gq/Pão Francês",
        "grams": 24.0,
        "label": "Gq/Pão Francês (24g)"
      },
      {
        "measure": "Mq/Cream Cracker",
        "grams": 20.0,
        "label": "Mq/Cream Cracker (20g)"
      },
      {
        "measure": "Mqi/Pão De Forma",
        "grams": 80.0,
        "label": "Mqi/Pão De Forma (80g)"
      },
      {
        "measure": "Mqipão Francês",
        "grams": 140.0,
        "label": "Mqipão Francês (140g)"
      },
      {
        "measure": "Pqi/Cream Cracker",
        "grams": 10.0,
        "label": "Pqi/Cream Cracker (10g)"
      },
      {
        "measure": "Pq/Pão De Forma",
        "grams": 40.0,
        "label": "Pq/Pão De Forma (40g)"
      },
      {
        "measure": "Pq/Pão Francês",
        "grams": 10.0,
        "label": "Pq/Pão Francês (10g)"
      },
      {
        "measure": "Cols Cii",
        "grams": 20.0,
        "label": "Cols Cii (20g)"
      }
    ],
    "MAMAO": [
      {
        "measure": "Fatia grande",
        "grams": 290.0,
        "label": "Fatia grande (290g)"
      },
      {
        "measure": "Fatia média",
        "grams": 170.0,
        "label": "Fatia média (170g)"
      }
    ],
    "MAMAO PAPAYA": [
      {
        "measure": "Colher de arroz cháeia picado(a)",
        "grams": 70.0,
        "label": "Colher de arroz cháeia picado(a) (70g)"
      },
      {
        "measure": "Colher de sopa cháeia picado(a)",
        "grams": 25.0,
        "label": "Colher de sopa cháeia picado(a) (25g)"
      },
      {
        "measure": "Unidade grande",
        "grams": 530.0,
        "label": "Unidade grande (530g)"
      }
    ],
    "MANGA": [
      {
        "measure": "Espada M",
        "grams": 1400.0,
        "label": "Espada M (1400g)"
      }
    ],
    "MANTEIGA COM SAL": [
      {
        "measure": "Colher de cháá cháeia",
        "grams": 8.0,
        "label": "Colher de cháá cháeia (8g)"
      },
      {
        "measure": "Col Chá N",
        "grams": 20.0,
        "label": "Col Chá N (20g)"
      },
      {
        "measure": "Colher de cháá rasa",
        "grams": 4.0,
        "label": "Colher de cháá rasa (4g)"
      },
      {
        "measure": "Colsn",
        "grams": 70.0,
        "label": "Colsn (70g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 19.0,
        "label": "Colher de sopa rasa (19g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 23.0,
        "label": "Colher de sopa cháeia (23g)"
      },
      {
        "measure": "Col Sob N",
        "grams": 40.0,
        "label": "Col Sob N (40g)"
      },
      {
        "measure": "Colher de sobremesa rasa",
        "grams": 13.0,
        "label": "Colher de sobremesa rasa (13g)"
      },
      {
        "measure": "Gq/Cream Cracker",
        "grams": 40.0,
        "label": "Gq/Cream Cracker (40g)"
      },
      {
        "measure": "Cq/Pão De Forma",
        "grams": 10.0,
        "label": "Cq/Pão De Forma (10g)"
      },
      {
        "measure": "Gq/Pão Francês",
        "grams": 220.0,
        "label": "Gq/Pão Francês (220g)"
      },
      {
        "measure": "Mq/Cream Cracker",
        "grams": 20.0,
        "label": "Mq/Cream Cracker (20g)"
      },
      {
        "measure": "Mq/Pão De Forma",
        "grams": 60.0,
        "label": "Mq/Pão De Forma (60g)"
      },
      {
        "measure": "Mq/Pão Francês",
        "grams": 100.0,
        "label": "Mq/Pão Francês (100g)"
      },
      {
        "measure": "Pq/Pão De Forma",
        "grams": 50.0,
        "label": "Pq/Pão De Forma (50g)"
      },
      {
        "measure": "Pq/Pão Francês",
        "grams": 60.0,
        "label": "Pq/Pão Francês (60g)"
      }
    ],
    "UNDP": [
      {
        "measure": "Colher de cháá cháeia",
        "grams": 8.0,
        "label": "Colher de cháá cháeia (8g)"
      },
      {
        "measure": "Col Chá N",
        "grams": 20.0,
        "label": "Col Chá N (20g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 33.0,
        "label": "Colher de sopa cháeia (33g)"
      },
      {
        "measure": "Colsn",
        "grams": 70.0,
        "label": "Colsn (70g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 19.0,
        "label": "Colher de sopa rasa (19g)"
      },
      {
        "measure": "Col Sob N",
        "grams": 4.0,
        "label": "Col Sob N (4g)"
      },
      {
        "measure": "Gqi/Cream Cracker",
        "grams": 40.0,
        "label": "Gqi/Cream Cracker (40g)"
      },
      {
        "measure": "Gq/Pão De Forma",
        "grams": 100.0,
        "label": "Gq/Pão De Forma (100g)"
      },
      {
        "measure": "Gq/Pão Francês",
        "grams": 220.0,
        "label": "Gq/Pão Francês (220g)"
      },
      {
        "measure": "Mqi/Cream Cracker",
        "grams": 20.0,
        "label": "Mqi/Cream Cracker (20g)"
      },
      {
        "measure": "Mq/Pão Francês",
        "grams": 100.0,
        "label": "Mq/Pão Francês (100g)"
      },
      {
        "measure": "Pq/Cream Cracker",
        "grams": 10.0,
        "label": "Pq/Cream Cracker (10g)"
      },
      {
        "measure": "Pq/Pão De Forma",
        "grams": 50.0,
        "label": "Pq/Pão De Forma (50g)"
      },
      {
        "measure": "Pq/Pão Francês",
        "grams": 60.0,
        "label": "Pq/Pão Francês (60g)"
      },
      {
        "measure": "Fatia média",
        "grams": 60.0,
        "label": "Fatia média (60g)"
      },
      {
        "measure": "Fatia pequena",
        "grams": 40.0,
        "label": "Fatia pequena (40g)"
      }
    ],
    "MASSA DE PASTEL FRITA": [
      {
        "measure": "Unidade",
        "grams": 170.0,
        "label": "Unidade (170g)"
      }
    ],
    "MAXIXE COZIDO": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 75.0,
        "label": "Colher de arroz cháeia (75g)"
      },
      {
        "measure": "Colher de arroz rasa",
        "grams": 55.0,
        "label": "Colher de arroz rasa (55g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 25.0,
        "label": "Colher de sopa rasa (25g)"
      },
      {
        "measure": "Escumadeira média cháeia",
        "grams": 130.0,
        "label": "Escumadeira média cháeia (130g)"
      },
      {
        "measure": "Escumadeira média rasa",
        "grams": 80.0,
        "label": "Escumadeira média rasa (80g)"
      }
    ],
    "MAXIXE REFOGADO": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 75.0,
        "label": "Colher de arroz cháeia (75g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 25.0,
        "label": "Colher de sopa rasa (25g)"
      }
    ],
    "MEL DE ABELHA": [
      {
        "measure": "Cols",
        "grams": 15.0,
        "label": "Cols (15g)"
      },
      {
        "measure": "Col Caféé",
        "grams": 2.0,
        "label": "Col Caféé (2g)"
      },
      {
        "measure": "Col Chá",
        "grams": 3.0,
        "label": "Col Chá (3g)"
      },
      {
        "measure": "Col Sob",
        "grams": 10.0,
        "label": "Col Sob (10g)"
      }
    ],
    "IMELANCIA": [
      {
        "measure": "Fatia média",
        "grams": 200.0,
        "label": "Fatia média (200g)"
      }
    ],
    "MELAO": [
      {
        "measure": "Fatia grande",
        "grams": 115.0,
        "label": "Fatia grande (115g)"
      },
      {
        "measure": "Fatia média",
        "grams": 90.0,
        "label": "Fatia média (90g)"
      },
      {
        "measure": "Fatia pequena",
        "grams": 70.0,
        "label": "Fatia pequena (70g)"
      },
      {
        "measure": "Unidade média",
        "grams": 660.0,
        "label": "Unidade média (660g)"
      }
    ],
    "MILHO VERDE ENLATADO": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 24.0,
        "label": "Colher de sopa cháeia (24g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 14.0,
        "label": "Colher de sopa rasa (14g)"
      }
    ],
    "MINGAU": [
      {
        "measure": "Cols",
        "grams": 37.0,
        "label": "Cols (37g)"
      },
      {
        "measure": "Col Sob",
        "grams": 27.0,
        "label": "Col Sob (27g)"
      },
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 230.0,
        "label": "Copo duplo (240ml) (240ml) (230g)"
      },
      {
        "measure": "Ptfçh",
        "grams": 375.0,
        "label": "Ptfçh (375g)"
      },
      {
        "measure": "Ptfr",
        "grams": 200.0,
        "label": "Ptfr (200g)"
      },
      {
        "measure": "Prato raso",
        "grams": 195.0,
        "label": "Prato raso (195g)"
      },
      {
        "measure": "Prato de sobremesa",
        "grams": 105.0,
        "label": "Prato de sobremesa (105g)"
      }
    ],
    "MISTO QUENTE": [
      {
        "measure": "Unidade",
        "grams": 85.0,
        "label": "Unidade (85g)"
      }
    ],
    "MIUDOS DE GALINHA": [
      {
        "measure": "Moelag",
        "grams": 27.0,
        "label": "Moelag (27g)"
      },
      {
        "measure": "Moela M",
        "grams": 180.0,
        "label": "Moela M (180g)"
      },
      {
        "measure": "Moelap",
        "grams": 140.0,
        "label": "Moelap (140g)"
      }
    ],
    "MOLHO A BOLONHESA": [
      {
        "measure": "Concháa pequena cháeia",
        "grams": 63.0,
        "label": "Concháa pequena cháeia (63g)"
      },
      {
        "measure": "Cola",
        "grams": 35.0,
        "label": "Cola (35g)"
      },
      {
        "measure": "Cols",
        "grams": 22.0,
        "label": "Cols (22g)"
      },
      {
        "measure": "Col Sob",
        "grams": 14.0,
        "label": "Col Sob (14g)"
      }
    ],
    "MOLHO A CAMPANHA": [
      {
        "measure": "Concháa pequena cháeia",
        "grams": 80.0,
        "label": "Concháa pequena cháeia (80g)"
      },
      {
        "measure": "Concháa pequena rasa",
        "grams": 45.0,
        "label": "Concháa pequena rasa (45g)"
      },
      {
        "measure": "Colher de arroz cháeia",
        "grams": 65.0,
        "label": "Colher de arroz cháeia (65g)"
      },
      {
        "measure": "Colher de arroz rasa",
        "grams": 40.0,
        "label": "Colher de arroz rasa (40g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 16.0,
        "label": "Colher de sopa rasa (16g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 18.0,
        "label": "Colher de sopa cháeia (18g)"
      },
      {
        "measure": "Cols",
        "grams": 35.0,
        "label": "Cols (35g)"
      },
      {
        "measure": "Cola",
        "grams": 45.0,
        "label": "Cola (45g)"
      },
      {
        "measure": "Col Chá",
        "grams": 10.0,
        "label": "Col Chá (10g)"
      }
    ],
    "MOLHO ROQUEFORT": [
      {
        "measure": "Unidade grande",
        "grams": 20.0,
        "label": "Unidade grande (20g)"
      },
      {
        "measure": "Unidade média",
        "grams": 120.0,
        "label": "Unidade média (120g)"
      },
      {
        "measure": "Fatia grande",
        "grams": 25.0,
        "label": "Fatia grande (25g)"
      }
    ],
    "CONDIMENTO": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 20.0,
        "label": "Colher de sopa cháeia (20g)"
      },
      {
        "measure": "Colher de sobremesa rasa",
        "grams": 9.0,
        "label": "Colher de sobremesa rasa (9g)"
      }
    ],
    "FOLHA COZIDA": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 75.0,
        "label": "Colher de arroz cháeia (75g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Colher de sobremesa cháeia",
        "grams": 18.0,
        "label": "Colher de sobremesa cháeia (18g)"
      }
    ],
    "PORCAO": [
      {
        "measure": "Colher de cháá cháeia",
        "grams": 5.0,
        "label": "Colher de cháá cháeia (5g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 30.0,
        "label": "Colher de sopa rasa (30g)"
      },
      {
        "measure": "Colher de cháá rasa",
        "grams": 5.0,
        "label": "Colher de cháá rasa (5g)"
      }
    ],
    "NESCAU": [
      {
        "measure": "Col Caféé Ch",
        "grams": 20.0,
        "label": "Col Caféé Ch (20g)"
      },
      {
        "measure": "Colher de cháá rasa",
        "grams": 5.0,
        "label": "Colher de cháá rasa (5g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 16.0,
        "label": "Colher de sopa cháeia (16g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 11.0,
        "label": "Colher de sopa rasa (11g)"
      }
    ],
    "NESCAU BEBIDA LACTEA": [
      {
        "measure": "Unidade",
        "grams": 200.0,
        "label": "Unidade (200g)"
      },
      {
        "measure": "Col Caféé Ch",
        "grams": 20.0,
        "label": "Col Caféé Ch (20g)"
      },
      {
        "measure": "Colher de cháá cháeia",
        "grams": 4.0,
        "label": "Colher de cháá cháeia (4g)"
      },
      {
        "measure": "Colher de cháá rasa",
        "grams": 5.0,
        "label": "Colher de cháá rasa (5g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 16.0,
        "label": "Colher de sopa cháeia (16g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 11.0,
        "label": "Colher de sopa rasa (11g)"
      }
    ],
    "ALPINO BEBIDA LACTEA": [
      {
        "measure": "Unidade",
        "grams": 200.0,
        "label": "Unidade (200g)"
      },
      {
        "measure": "Col Caféé Ch",
        "grams": 20.0,
        "label": "Col Caféé Ch (20g)"
      },
      {
        "measure": "Colher de cháá cháeia",
        "grams": 4.0,
        "label": "Colher de cháá cháeia (4g)"
      },
      {
        "measure": "Colher de cháá rasa",
        "grams": 5.0,
        "label": "Colher de cháá rasa (5g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 16.0,
        "label": "Colher de sopa cháeia (16g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 11.0,
        "label": "Colher de sopa rasa (11g)"
      }
    ],
    "NESPERA": [
      {
        "measure": "Unidade grande",
        "grams": 400.0,
        "label": "Unidade grande (400g)"
      },
      {
        "measure": "Unidade média",
        "grams": 27.0,
        "label": "Unidade média (27g)"
      },
      {
        "measure": "Medida",
        "grams": 48.0,
        "label": "Medida (48g)"
      }
    ],
    "SOJA PO": [
      {
        "measure": "Medida",
        "grams": 48.0,
        "label": "Medida (48g)"
      }
    ],
    "RECONSTITUIDO": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 12.0,
        "label": "Colher de sopa cháeia (12g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 7.0,
        "label": "Colher de sopa rasa (7g)"
      }
    ],
    "NESTON": [
      {
        "measure": "Colher de cháá cháeia",
        "grams": 5.0,
        "label": "Colher de cháá cháeia (5g)"
      },
      {
        "measure": "Colher de cháá rasa",
        "grams": 10.0,
        "label": "Colher de cháá rasa (10g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 25.0,
        "label": "Colher de sopa rasa (25g)"
      },
      {
        "measure": "Colher de sobremesa cháeia",
        "grams": 15.0,
        "label": "Colher de sobremesa cháeia (15g)"
      }
    ],
    "NHOQUE": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 70.0,
        "label": "Colher de arroz cháeia (70g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 30.0,
        "label": "Colher de sopa cháeia (30g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 20.0,
        "label": "Colher de sopa rasa (20g)"
      }
    ],
    "ESC M CH": [
      {
        "measure": "Escumadeira média rasa",
        "grams": 60.0,
        "label": "Escumadeira média rasa (60g)"
      },
      {
        "measure": "Pedaço grande",
        "grams": 1200.0,
        "label": "Pedaço grande (1200g)"
      },
      {
        "measure": "Pedaço médio",
        "grams": 90.0,
        "label": "Pedaço médio (90g)"
      },
      {
        "measure": "Pedaço pequeno",
        "grams": 700.0,
        "label": "Pedaço pequeno (700g)"
      }
    ],
    "BEBIDA LACTEA": [
      {
        "measure": "Unidade",
        "grams": 200.0,
        "label": "Unidade (200g)"
      },
      {
        "measure": "Colher de cháá cháeia",
        "grams": 5.0,
        "label": "Colher de cháá cháeia (5g)"
      },
      {
        "measure": "Colher de cháá rasa",
        "grams": 5.0,
        "label": "Colher de cháá rasa (5g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 15.0,
        "label": "Colher de sopa cháeia (15g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 25.0,
        "label": "Colher de sopa rasa (25g)"
      }
    ],
    "CHOCOLATE PO": [
      {
        "measure": "Colher de cháá cháeia",
        "grams": 5.0,
        "label": "Colher de cháá cháeia (5g)"
      },
      {
        "measure": "Colher de cháá rasa",
        "grams": 5.0,
        "label": "Colher de cháá rasa (5g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 15.0,
        "label": "Colher de sopa cháeia (15g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 25.0,
        "label": "Colher de sopa rasa (25g)"
      },
      {
        "measure": "Punhado",
        "grams": 300.0,
        "label": "Punhado (300g)"
      }
    ],
    "OLEO VEGETAL": [
      {
        "measure": "Col Caféé",
        "grams": 10.0,
        "label": "Col Caféé (10g)"
      },
      {
        "measure": "Col Chá",
        "grams": 20.0,
        "label": "Col Chá (20g)"
      },
      {
        "measure": "Cols",
        "grams": 80.0,
        "label": "Cols (80g)"
      },
      {
        "measure": "Col Sob",
        "grams": 50.0,
        "label": "Col Sob (50g)"
      }
    ],
    "OVO DE CODORNA": [
      {
        "measure": "Unidade",
        "grams": 100.0,
        "label": "Unidade (100g)"
      }
    ],
    "CLARA COZIDA": [
      {
        "measure": "Fatia média",
        "grams": 100.0,
        "label": "Fatia média (100g)"
      },
      {
        "measure": "Unidade média",
        "grams": 450.0,
        "label": "Unidade média (450g)"
      }
    ],
    "OVO DE GALINHA FRITO": [
      {
        "measure": "Unidade média",
        "grams": 50.0,
        "label": "Unidade média (50g)"
      }
    ],
    "GEMA COZIDA": [
      {
        "measure": "Unidade média",
        "grams": 150.0,
        "label": "Unidade média (150g)"
      }
    ],
    "OVO DE GALINHA MEXIDO": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 45.0,
        "label": "Colher de arroz cháeia (45g)"
      },
      {
        "measure": "Colher de arroz rasa",
        "grams": 25.0,
        "label": "Colher de arroz rasa (25g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 15.0,
        "label": "Colher de sopa cháeia (15g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 25.0,
        "label": "Colher de sopa rasa (25g)"
      },
      {
        "measure": "Escumadeira média rasa",
        "grams": 45.0,
        "label": "Escumadeira média rasa (45g)"
      },
      {
        "measure": "Col Caféé Ch",
        "grams": 10.0,
        "label": "Col Caféé Ch (10g)"
      },
      {
        "measure": "Colher de sobremesa rasa",
        "grams": 15.0,
        "label": "Colher de sobremesa rasa (15g)"
      }
    ],
    "PACOCA": [
      {
        "measure": "Unidade",
        "grams": 30.0,
        "label": "Unidade (30g)"
      },
      {
        "measure": "Colher de sopa rasa picado(a)",
        "grams": 15.0,
        "label": "Colher de sopa rasa picado(a) (15g)"
      }
    ],
    "PAMONHA": [
      {
        "measure": "Fatia média",
        "grams": 45.0,
        "label": "Fatia média (45g)"
      },
      {
        "measure": "Fatia pequena",
        "grams": 250.0,
        "label": "Fatia pequena (250g)"
      }
    ],
    "PANQUECA DE CARNE": [
      {
        "measure": "Unidade média",
        "grams": 80.0,
        "label": "Unidade média (80g)"
      }
    ],
    "PAO ARABE": [
      {
        "measure": "Unidade grande",
        "grams": 80.0,
        "label": "Unidade grande (80g)"
      }
    ],
    "PAO DE HAMBURGUER": [
      {
        "measure": "Unidade",
        "grams": 70.0,
        "label": "Unidade (70g)"
      }
    ],
    "PAO DE MILHO": [
      {
        "measure": "Unidade média",
        "grams": 70.0,
        "label": "Unidade média (70g)"
      }
    ],
    "JFAO DE QUEIJO": [
      {
        "measure": "Unidade grande",
        "grams": 40.0,
        "label": "Unidade grande (40g)"
      },
      {
        "measure": "Unidade média",
        "grams": 200.0,
        "label": "Unidade média (200g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 10.0,
        "label": "Unidade pequena (10g)"
      },
      {
        "measure": "Unidade",
        "grams": 50.0,
        "label": "Unidade (50g)"
      }
    ],
    "PAO DE SAL": [
      {
        "measure": "Bisnaga",
        "grams": 200.0,
        "label": "Bisnaga (200g)"
      }
    ],
    "AVEIA NESTLE BABY": [
      {
        "measure": "Pote",
        "grams": 155.0,
        "label": "Pote (155g)"
      }
    ],
    "NESTLE BABY": [
      {
        "measure": "Pote",
        "grams": 155.0,
        "label": "Pote (155g)"
      }
    ],
    "PASTA DE ATUM": [
      {
        "measure": "Colher de cháá cháeia",
        "grams": 9.0,
        "label": "Colher de cháá cháeia (9g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 23.0,
        "label": "Colher de sopa cháeia (23g)"
      },
      {
        "measure": "Gq/Cream Cracker",
        "grams": 130.0,
        "label": "Gq/Cream Cracker (130g)"
      },
      {
        "measure": "Gq/Pão De Forma",
        "grams": 580.0,
        "label": "Gq/Pão De Forma (580g)"
      },
      {
        "measure": "Gq/Pão Francês",
        "grams": 66.0,
        "label": "Gq/Pão Francês (66g)"
      },
      {
        "measure": "Mq/Cream Cracker",
        "grams": 80.0,
        "label": "Mq/Cream Cracker (80g)"
      },
      {
        "measure": "Mq/Pão De Forma",
        "grams": 300.0,
        "label": "Mq/Pão De Forma (300g)"
      },
      {
        "measure": "Pq/Cream Cracker",
        "grams": 40.0,
        "label": "Pq/Cream Cracker (40g)"
      },
      {
        "measure": "Pq/Pão De Forma",
        "grams": 150.0,
        "label": "Pq/Pão De Forma (150g)"
      },
      {
        "measure": "Pq/Pão Francês",
        "grams": 260.0,
        "label": "Pq/Pão Francês (260g)"
      }
    ],
    "PASTA TOFU": [
      {
        "measure": "Colher de cháá cháeia",
        "grams": 5.0,
        "label": "Colher de cháá cháeia (5g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 26.0,
        "label": "Colher de sopa cháeia (26g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 13.0,
        "label": "Colher de sopa rasa (13g)"
      },
      {
        "measure": "Unidade média",
        "grams": 320.0,
        "label": "Unidade média (320g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 80.0,
        "label": "Unidade pequena (80g)"
      }
    ],
    "PASTEL DE FORNO": [
      {
        "measure": "Unidade grande",
        "grams": 400.0,
        "label": "Unidade grande (400g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 100.0,
        "label": "Unidade pequena (100g)"
      }
    ],
    "PASTEL DE QUEIJO": [
      {
        "measure": "Unidade média",
        "grams": 250.0,
        "label": "Unidade média (250g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 100.0,
        "label": "Unidade pequena (100g)"
      },
      {
        "measure": "Col Caféé Ch",
        "grams": 35.0,
        "label": "Col Caféé Ch (35g)"
      },
      {
        "measure": "Colher de cháá rasa",
        "grams": 5.0,
        "label": "Colher de cháá rasa (5g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 22.0,
        "label": "Colher de sopa cháeia (22g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 17.0,
        "label": "Colher de sopa rasa (17g)"
      },
      {
        "measure": "Gq/Cream Cracker",
        "grams": 70.0,
        "label": "Gq/Cream Cracker (70g)"
      },
      {
        "measure": "Gq/Pão De Forma",
        "grams": 200.0,
        "label": "Gq/Pão De Forma (200g)"
      },
      {
        "measure": "Gq/Pão Francês",
        "grams": 350.0,
        "label": "Gq/Pão Francês (350g)"
      },
      {
        "measure": "Mq/Cream Cracker",
        "grams": 30.0,
        "label": "Mq/Cream Cracker (30g)"
      },
      {
        "measure": "Mq/Pão De Forma",
        "grams": 100.0,
        "label": "Mq/Pão De Forma (100g)"
      },
      {
        "measure": "Mq/Pão Francês",
        "grams": 150.0,
        "label": "Mq/Pão Francês (150g)"
      },
      {
        "measure": "Pq/Pão De Forma",
        "grams": 5.0,
        "label": "Pq/Pão De Forma (5g)"
      },
      {
        "measure": "Pqi/Pão Francês",
        "grams": 80.0,
        "label": "Pqi/Pão Francês (80g)"
      }
    ],
    "PAVE DE AMENDOIM": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 22.0,
        "label": "Colher de sopa cháeia (22g)"
      },
      {
        "measure": "Pedaço grande",
        "grams": 180.0,
        "label": "Pedaço grande (180g)"
      },
      {
        "measure": "Pedaço médio",
        "grams": 1100.0,
        "label": "Pedaço médio (1100g)"
      },
      {
        "measure": "Pedaço pequeno",
        "grams": 60.0,
        "label": "Pedaço pequeno (60g)"
      }
    ],
    "PAVE DE FRUTA": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 15.0,
        "label": "Colher de sopa rasa (15g)"
      },
      {
        "measure": "Pedaço grande",
        "grams": 1300.0,
        "label": "Pedaço grande (1300g)"
      },
      {
        "measure": "Pedaço médio",
        "grams": 80.0,
        "label": "Pedaço médio (80g)"
      },
      {
        "measure": "Pedaço pequeno",
        "grams": 50.0,
        "label": "Pedaço pequeno (50g)"
      }
    ],
    "PE DE MOLEQUE": [
      {
        "measure": "Unidade média",
        "grams": 20.0,
        "label": "Unidade média (20g)"
      }
    ],
    "EIXEAESCAIECHE": [
      {
        "measure": "Filé G",
        "grams": 155.0,
        "label": "Filé G (155g)"
      },
      {
        "measure": "Filé M",
        "grams": 1200.0,
        "label": "Filé M (1200g)"
      }
    ],
    "PEIXE A MILANESA": [
      {
        "measure": "Filég",
        "grams": 150.0,
        "label": "Filég (150g)"
      },
      {
        "measure": "Filé M",
        "grams": 1150.0,
        "label": "Filé M (1150g)"
      },
      {
        "measure": "Filép",
        "grams": 90.0,
        "label": "Filép (90g)"
      }
    ],
    "PEIXE COZIDO": [
      {
        "measure": "Colher de sopa cháeia picado(a)",
        "grams": 20.0,
        "label": "Colher de sopa cháeia picado(a) (20g)"
      },
      {
        "measure": "Colher de sopa rasa picado(a)",
        "grams": 25.0,
        "label": "Colher de sopa rasa picado(a) (25g)"
      },
      {
        "measure": "Filé M",
        "grams": 1200.0,
        "label": "Filé M (1200g)"
      }
    ],
    "FILE P": [
      {
        "measure": "Posta G",
        "grams": 250.0,
        "label": "Posta G (250g)"
      },
      {
        "measure": "Posta M",
        "grams": 200.0,
        "label": "Posta M (200g)"
      },
      {
        "measure": "Postap",
        "grams": 150.0,
        "label": "Postap (150g)"
      },
      {
        "measure": "Posta P",
        "grams": 1500.0,
        "label": "Posta P (1500g)"
      },
      {
        "measure": "W Postap",
        "grams": 150.0,
        "label": "W Postap (150g)"
      }
    ],
    "PEIXE ENSOPADO": [
      {
        "measure": "Filé G",
        "grams": 155.0,
        "label": "Filé G (155g)"
      },
      {
        "measure": "Filé M",
        "grams": 120.0,
        "label": "Filé M (120g)"
      }
    ],
    "PEIXE FRITO": [
      {
        "measure": "Filég",
        "grams": 155.0,
        "label": "Filég (155g)"
      }
    ],
    "PEPINO": [
      {
        "measure": "Colher de sopa cháeia picado(a)",
        "grams": 18.0,
        "label": "Colher de sopa cháeia picado(a) (18g)"
      },
      {
        "measure": "Unidade média",
        "grams": 100.0,
        "label": "Unidade média (100g)"
      },
      {
        "measure": "Unidade grande",
        "grams": 190.0,
        "label": "Unidade grande (190g)"
      }
    ],
    "PERU": [
      {
        "measure": "Fatia pequena",
        "grams": 20.0,
        "label": "Fatia pequena (20g)"
      }
    ],
    "PESSEGO": [
      {
        "measure": "Unidade grande",
        "grams": 110.0,
        "label": "Unidade grande (110g)"
      },
      {
        "measure": "Unidade média",
        "grams": 60.0,
        "label": "Unidade média (60g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 32.0,
        "label": "Unidade pequena (32g)"
      }
    ],
    "PICOLE ABACAXI KIBON": [
      {
        "measure": "Unidade",
        "grams": 59.0,
        "label": "Unidade (59g)"
      }
    ],
    "PICOLE CHICABON": [
      {
        "measure": "Unidade",
        "grams": 63.0,
        "label": "Unidade (63g)"
      }
    ],
    "PICOLE CHOKITO": [
      {
        "measure": "Unidade",
        "grams": 50.0,
        "label": "Unidade (50g)"
      }
    ],
    "PICOLE CRUNCH": [
      {
        "measure": "Unidade",
        "grams": 58.0,
        "label": "Unidade (58g)"
      }
    ],
    "NEGRO KIBON": [
      {
        "measure": "Unidade",
        "grams": 55.0,
        "label": "Unidade (55g)"
      }
    ],
    "KIPOLPA MANGA": [
      {
        "measure": "Unidade",
        "grams": 61.0,
        "label": "Unidade (61g)"
      }
    ],
    "TABLITO": [
      {
        "measure": "Unidade",
        "grams": 65.0,
        "label": "Unidade (65g)"
      }
    ],
    "PICOLE MEGA CLASSICO": [
      {
        "measure": "Unidade",
        "grams": 710.0,
        "label": "Unidade (710g)"
      }
    ],
    "AMARELAS": [
      {
        "measure": "Unidade",
        "grams": 730.0,
        "label": "Unidade (730g)"
      }
    ],
    "PICOLE PRESTIGIO": [
      {
        "measure": "Unidade",
        "grams": 50.0,
        "label": "Unidade (50g)"
      }
    ],
    "PIMENTAO": [
      {
        "measure": "Colher de sopa cháeia picado(a)",
        "grams": 13.0,
        "label": "Colher de sopa cháeia picado(a) (13g)"
      },
      {
        "measure": "Colher de sopa rasa picado(a)",
        "grams": 25.0,
        "label": "Colher de sopa rasa picado(a) (25g)"
      },
      {
        "measure": "Fatia grande",
        "grams": 80.0,
        "label": "Fatia grande (80g)"
      },
      {
        "measure": "Fatia média",
        "grams": 60.0,
        "label": "Fatia média (60g)"
      },
      {
        "measure": "Fatia pequena",
        "grams": 40.0,
        "label": "Fatia pequena (40g)"
      },
      {
        "measure": "Unidade grande",
        "grams": 87.0,
        "label": "Unidade grande (87g)"
      },
      {
        "measure": "Unidade média",
        "grams": 550.0,
        "label": "Unidade média (550g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 380.0,
        "label": "Unidade pequena (380g)"
      }
    ],
    "PIPOCA COM SAL": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 20.0,
        "label": "Colher de sopa cháeia (20g)"
      },
      {
        "measure": "Saco G",
        "grams": 250.0,
        "label": "Saco G (250g)"
      },
      {
        "measure": "Saco M",
        "grams": 200.0,
        "label": "Saco M (200g)"
      },
      {
        "measure": "Saco P",
        "grams": 150.0,
        "label": "Saco P (150g)"
      }
    ],
    "PIPOCA DOCE": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 20.0,
        "label": "Colher de sopa cháeia (20g)"
      },
      {
        "measure": "Saco G",
        "grams": 250.0,
        "label": "Saco G (250g)"
      },
      {
        "measure": "Saco M",
        "grams": 200.0,
        "label": "Saco M (200g)"
      },
      {
        "measure": "Saco P",
        "grams": 150.0,
        "label": "Saco P (150g)"
      }
    ],
    "PIRAO": [
      {
        "measure": "Concháa média cháeia",
        "grams": 165.0,
        "label": "Concháa média cháeia (165g)"
      },
      {
        "measure": "Concháa média rasa",
        "grams": 140.0,
        "label": "Concháa média rasa (140g)"
      },
      {
        "measure": "Prato fundo",
        "grams": 500.0,
        "label": "Prato fundo (500g)"
      },
      {
        "measure": "Prato raso",
        "grams": 300.0,
        "label": "Prato raso (300g)"
      }
    ],
    "PIZZA CALABREZA": [
      {
        "measure": "Fatia grande",
        "grams": 120.0,
        "label": "Fatia grande (120g)"
      },
      {
        "measure": "Fatia média",
        "grams": 90.0,
        "label": "Fatia média (90g)"
      },
      {
        "measure": "Fatia pequena",
        "grams": 45.0,
        "label": "Fatia pequena (45g)"
      }
    ],
    "PIZZA DE PRESUNTO": [
      {
        "measure": "Fatia grande",
        "grams": 145.0,
        "label": "Fatia grande (145g)"
      },
      {
        "measure": "Frm",
        "grams": 110.0,
        "label": "Frm (110g)"
      },
      {
        "measure": "Fatia pequena",
        "grams": 60.0,
        "label": "Fatia pequena (60g)"
      }
    ],
    "PIZZA PORTUGUESA": [
      {
        "measure": "Fatia grande",
        "grams": 160.0,
        "label": "Fatia grande (160g)"
      },
      {
        "measure": "Fatia média",
        "grams": 125.0,
        "label": "Fatia média (125g)"
      },
      {
        "measure": "Fatia pequena",
        "grams": 65.0,
        "label": "Fatia pequena (65g)"
      }
    ],
    "POLVO REFOGADO": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 40.0,
        "label": "Colher de arroz cháeia (40g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 22.0,
        "label": "Colher de sopa cháeia (22g)"
      },
      {
        "measure": "Escumadeira média cháeia",
        "grams": 60.0,
        "label": "Escumadeira média cháeia (60g)"
      }
    ],
    "PRESUNTADA": [
      {
        "measure": "Fatia média",
        "grams": 15.0,
        "label": "Fatia média (15g)"
      }
    ],
    "PUDIM DE LEITE": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Fatia grande",
        "grams": 260.0,
        "label": "Fatia grande (260g)"
      },
      {
        "measure": "Fatia média",
        "grams": 130.0,
        "label": "Fatia média (130g)"
      },
      {
        "measure": "Fatia pequena",
        "grams": 9.0,
        "label": "Fatia pequena (9g)"
      }
    ],
    "PURE DE BATATA": [
      {
        "measure": "Concháa média rasa",
        "grams": 140.0,
        "label": "Concháa média rasa (140g)"
      },
      {
        "measure": "Colher de arroz cháeia",
        "grams": 80.0,
        "label": "Colher de arroz cháeia (80g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 25.0,
        "label": "Colher de sopa rasa (25g)"
      }
    ],
    "PURE DE INHAME": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 65.0,
        "label": "Colher de arroz cháeia (65g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 20.0,
        "label": "Colher de sopa rasa (20g)"
      }
    ],
    "QUEIJADINHA": [
      {
        "measure": "Unidade grande",
        "grams": 40.0,
        "label": "Unidade grande (40g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 200.0,
        "label": "Unidade pequena (200g)"
      }
    ],
    "QUEIJO DESOJATOFU": [
      {
        "measure": "Fatia média",
        "grams": 280.0,
        "label": "Fatia média (280g)"
      }
    ],
    "QUEISO GORGONZOLA": [
      {
        "measure": "Fatia grande",
        "grams": 55.0,
        "label": "Fatia grande (55g)"
      },
      {
        "measure": "Fatia média",
        "grams": 380.0,
        "label": "Fatia média (380g)"
      },
      {
        "measure": "Fatia pequena",
        "grams": 150.0,
        "label": "Fatia pequena (150g)"
      },
      {
        "measure": "Peça Triangular",
        "grams": 235.0,
        "label": "Peça Triangular (235g)"
      },
      {
        "measure": "Tg",
        "grams": 400.0,
        "label": "Tg (400g)"
      }
    ],
    "FRESCO": [
      {
        "measure": "Fatia grande",
        "grams": 40.0,
        "label": "Fatia grande (40g)"
      },
      {
        "measure": "Fatia pequena",
        "grams": 20.0,
        "label": "Fatia pequena (20g)"
      },
      {
        "measure": "Fatia média",
        "grams": 300.0,
        "label": "Fatia média (300g)"
      },
      {
        "measure": "Fatia",
        "grams": 200.0,
        "label": "Fatia (200g)"
      }
    ],
    "QUEIJO PARMESAO": [
      {
        "measure": "Colher de sopa rasa",
        "grams": 25.0,
        "label": "Colher de sopa rasa (25g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Colher de cháá rasa",
        "grams": 5.0,
        "label": "Colher de cháá rasa (5g)"
      }
    ],
    "QUEIJO POLENGUINHO": [
      {
        "measure": "Unidade",
        "grams": 200.0,
        "label": "Unidade (200g)"
      }
    ],
    "QUEIJO PRATO": [
      {
        "measure": "Fatia grande",
        "grams": 200.0,
        "label": "Fatia grande (200g)"
      }
    ],
    "QUIABO REFOGADO": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 20.0,
        "label": "Colher de sopa rasa (20g)"
      }
    ],
    "IQUIBE FRITO": [
      {
        "measure": "Unidade média",
        "grams": 50.0,
        "label": "Unidade média (50g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 120.0,
        "label": "Unidade pequena (120g)"
      }
    ],
    "QUIBEBE": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 35.0,
        "label": "Colher de sopa cháeia (35g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 20.0,
        "label": "Colher de sopa rasa (20g)"
      }
    ],
    "QUINDIM": [
      {
        "measure": "Unidade média",
        "grams": 350.0,
        "label": "Unidade média (350g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 200.0,
        "label": "Unidade pequena (200g)"
      }
    ],
    "RABADA": [
      {
        "measure": "Pedaço grande",
        "grams": 90.0,
        "label": "Pedaço grande (90g)"
      },
      {
        "measure": "Pedaço médio",
        "grams": 40.0,
        "label": "Pedaço médio (40g)"
      },
      {
        "measure": "Pedaço pequeno",
        "grams": 15.0,
        "label": "Pedaço pequeno (15g)"
      }
    ],
    "RAPADURA": [
      {
        "measure": "Pedaço médio",
        "grams": 55.0,
        "label": "Pedaço médio (55g)"
      },
      {
        "measure": "Pedaço pequeno",
        "grams": 300.0,
        "label": "Pedaço pequeno (300g)"
      }
    ],
    "INDUSTR C AC": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      }
    ],
    "LARANJA C AC": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 165.0,
        "label": "Copo pequeno (165ml) (165g)"
      }
    ],
    "REPOLHO": [
      {
        "measure": "Colher de arroz cháeia picado(a)",
        "grams": 25.0,
        "label": "Colher de arroz cháeia picado(a) (25g)"
      },
      {
        "measure": "Colher de arroz rasa picado(a)",
        "grams": 20.0,
        "label": "Colher de arroz rasa picado(a) (20g)"
      },
      {
        "measure": "Cols Eh Picado",
        "grams": 100.0,
        "label": "Cols Eh Picado (100g)"
      },
      {
        "measure": "Colher de sopa rasa picado(a)",
        "grams": 25.0,
        "label": "Colher de sopa rasa picado(a) (25g)"
      },
      {
        "measure": "Escumadeira média cháeia picado(a)",
        "grams": 25.0,
        "label": "Escumadeira média cháeia picado(a) (25g)"
      },
      {
        "measure": "Escumadeira média rasa picado(a)",
        "grams": 15.0,
        "label": "Escumadeira média rasa picado(a) (15g)"
      },
      {
        "measure": "Folhag",
        "grams": 400.0,
        "label": "Folhag (400g)"
      },
      {
        "measure": "Folha média",
        "grams": 30.0,
        "label": "Folha média (30g)"
      },
      {
        "measure": "Folha pequena",
        "grams": 200.0,
        "label": "Folha pequena (200g)"
      }
    ],
    "REPOLHO COZIDO": [
      {
        "measure": "Colher de arroz cháeia picado(a)",
        "grams": 45.0,
        "label": "Colher de arroz cháeia picado(a) (45g)"
      },
      {
        "measure": "Colher de arroz rasa picado(a)",
        "grams": 35.0,
        "label": "Colher de arroz rasa picado(a) (35g)"
      },
      {
        "measure": "Colher de sopa cháeia picado(a)",
        "grams": 20.0,
        "label": "Colher de sopa cháeia picado(a) (20g)"
      },
      {
        "measure": "Colher de sopa rasa picado(a)",
        "grams": 12.0,
        "label": "Colher de sopa rasa picado(a) (12g)"
      },
      {
        "measure": "Escumadeira média cháeia picado(a)",
        "grams": 45.0,
        "label": "Escumadeira média cháeia picado(a) (45g)"
      },
      {
        "measure": "Folhag",
        "grams": 340.0,
        "label": "Folhag (340g)"
      },
      {
        "measure": "Folha média",
        "grams": 26.0,
        "label": "Folha média (26g)"
      },
      {
        "measure": "Folha pequena",
        "grams": 180.0,
        "label": "Folha pequena (180g)"
      },
      {
        "measure": "Folhap",
        "grams": 180.0,
        "label": "Folhap (180g)"
      }
    ],
    "REQUEIJAO": [
      {
        "measure": "Colher de sopa rasa",
        "grams": 15.0,
        "label": "Colher de sopa rasa (15g)"
      },
      {
        "measure": "Gq/Cream Cracker",
        "grams": 120.0,
        "label": "Gq/Cream Cracker (120g)"
      },
      {
        "measure": "Gq/Pão De Forma",
        "grams": 130.0,
        "label": "Gq/Pão De Forma (130g)"
      },
      {
        "measure": "Gq/Pão Francês",
        "grams": 35.0,
        "label": "Gq/Pão Francês (35g)"
      },
      {
        "measure": "Gq/Torradacomercial",
        "grams": 130.0,
        "label": "Gq/Torradacomercial (130g)"
      },
      {
        "measure": "Mq/Pão De Forma",
        "grams": 80.0,
        "label": "Mq/Pão De Forma (80g)"
      },
      {
        "measure": "Mqipão Francês",
        "grams": 22.0,
        "label": "Mqipão Francês (22g)"
      },
      {
        "measure": "Mq/Torrada Com",
        "grams": 80.0,
        "label": "Mq/Torrada Com (80g)"
      },
      {
        "measure": "Pq/Cream Cracker",
        "grams": 30.0,
        "label": "Pq/Cream Cracker (30g)"
      },
      {
        "measure": "Pq/Pão De Forma",
        "grams": 5.0,
        "label": "Pq/Pão De Forma (5g)"
      },
      {
        "measure": "Pq/Pão Francês",
        "grams": 14.0,
        "label": "Pq/Pão Francês (14g)"
      },
      {
        "measure": "Pq/Torrada Com",
        "grams": 5.0,
        "label": "Pq/Torrada Com (5g)"
      }
    ],
    "RICOTA": [
      {
        "measure": "Fatia grande",
        "grams": 50.0,
        "label": "Fatia grande (50g)"
      },
      {
        "measure": "Fatia média",
        "grams": 35.0,
        "label": "Fatia média (35g)"
      }
    ],
    "RISOLE": [
      {
        "measure": "Unidade grande",
        "grams": 70.0,
        "label": "Unidade grande (70g)"
      },
      {
        "measure": "Unidade média",
        "grams": 35.0,
        "label": "Unidade média (35g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 12.0,
        "label": "Unidade pequena (12g)"
      }
    ],
    "RISOTO DE FRANGO": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 15.0,
        "label": "Colher de sopa rasa (15g)"
      },
      {
        "measure": "Escumadeira média cháeia",
        "grams": 85.0,
        "label": "Escumadeira média cháeia (85g)"
      }
    ],
    "C MAIONESE": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      }
    ],
    "FRADINHO": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 57.0,
        "label": "Colher de arroz cháeia (57g)"
      },
      {
        "measure": "Colher de arroz rasa",
        "grams": 30.0,
        "label": "Colher de arroz rasa (30g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 32.0,
        "label": "Colher de sopa cháeia (32g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 20.0,
        "label": "Colher de sopa rasa (20g)"
      },
      {
        "measure": "Escumadeira média cháeia",
        "grams": 90.0,
        "label": "Escumadeira média cháeia (90g)"
      }
    ],
    "SALADA DE FRUTAS": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      },
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 210.0,
        "label": "Copo duplo (240ml) (240ml) (210g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 150.0,
        "label": "Copo pequeno (165ml) (150g)"
      },
      {
        "measure": "Colher de arroz cháeia",
        "grams": 55.0,
        "label": "Colher de arroz cháeia (55g)"
      },
      {
        "measure": "Colher de arroz rasa",
        "grams": 40.0,
        "label": "Colher de arroz rasa (40g)"
      },
      {
        "measure": "Escumadeira média cháeia",
        "grams": 90.0,
        "label": "Escumadeira média cháeia (90g)"
      },
      {
        "measure": "Lesc Mr",
        "grams": 60.0,
        "label": "Lesc Mr (60g)"
      }
    ],
    "COM MAIONESE": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 70.0,
        "label": "Colher de arroz cháeia (70g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      }
    ],
    "SALAME": [
      {
        "measure": "Fatia média",
        "grams": 200.0,
        "label": "Fatia média (200g)"
      }
    ],
    "SALAMINHO": [
      {
        "measure": "Fatia média",
        "grams": 50.0,
        "label": "Fatia média (50g)"
      },
      {
        "measure": "Colher de arroz cháeia",
        "grams": 40.0,
        "label": "Colher de arroz cháeia (40g)"
      },
      {
        "measure": "Colher de arroz rasa",
        "grams": 25.0,
        "label": "Colher de arroz rasa (25g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 20.0,
        "label": "Colher de sopa rasa (20g)"
      },
      {
        "measure": "Escumadeira média cháeia",
        "grams": 50.0,
        "label": "Escumadeira média cháeia (50g)"
      },
      {
        "measure": "Escumadeira média rasa",
        "grams": 30.0,
        "label": "Escumadeira média rasa (30g)"
      },
      {
        "measure": "Prato de sobremesa",
        "grams": 140.0,
        "label": "Prato de sobremesa (140g)"
      }
    ],
    "SALSICHA EM LATA": [
      {
        "measure": "Unidade média",
        "grams": 350.0,
        "label": "Unidade média (350g)"
      }
    ],
    "SANDUICHE DE FRANGO": [
      {
        "measure": "Unidade média",
        "grams": 1200.0,
        "label": "Unidade média (1200g)"
      }
    ],
    "LATAP": [
      {
        "measure": "Unidade média",
        "grams": 330.0,
        "label": "Unidade média (330g)"
      },
      {
        "measure": "Unidade grande",
        "grams": 40.0,
        "label": "Unidade grande (40g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 130.0,
        "label": "Unidade pequena (130g)"
      }
    ],
    "SIRI": [
      {
        "measure": "Poá P",
        "grams": 30.0,
        "label": "Poá P (30g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 160.0,
        "label": "Unidade pequena (160g)"
      },
      {
        "measure": "Pote",
        "grams": 150.0,
        "label": "Pote (150g)"
      },
      {
        "measure": "Concháa média cháeia",
        "grams": 130.0,
        "label": "Concháa média cháeia (130g)"
      },
      {
        "measure": "Concháa pequena cháeia",
        "grams": 60.0,
        "label": "Concháa pequena cháeia (60g)"
      },
      {
        "measure": "Prato fundo",
        "grams": 520.0,
        "label": "Prato fundo (520g)"
      },
      {
        "measure": "Prato raso",
        "grams": 325.0,
        "label": "Prato raso (325g)"
      }
    ],
    "IVCOM CARNE": [
      {
        "measure": "Concháa média cháeia",
        "grams": 130.0,
        "label": "Concháa média cháeia (130g)"
      },
      {
        "measure": "Concháa pequena cháeia",
        "grams": 60.0,
        "label": "Concháa pequena cháeia (60g)"
      },
      {
        "measure": "Prato raso",
        "grams": 325.0,
        "label": "Prato raso (325g)"
      }
    ],
    "BOLA G": [
      {
        "measure": "Bola M",
        "grams": 80.0,
        "label": "Bola M (80g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      }
    ],
    "SORVETE ESKIBON": [
      {
        "measure": "Unidade",
        "grams": 48.0,
        "label": "Unidade (48g)"
      }
    ],
    "CROCANTE E BAUNILHA": [
      {
        "measure": "Unidade",
        "grams": 710.0,
        "label": "Unidade (710g)"
      }
    ],
    "SOYMILKE PO": [
      {
        "measure": "Colher de sopa rasa",
        "grams": 25.0,
        "label": "Colher de sopa rasa (25g)"
      }
    ],
    "STROGONOFF DE CARNE": [
      {
        "measure": "Concháa média cháeia",
        "grams": 170.0,
        "label": "Concháa média cháeia (170g)"
      },
      {
        "measure": "Colher de arroz cháeia",
        "grams": 40.0,
        "label": "Colher de arroz cháeia (40g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      }
    ],
    "FRANGO": [
      {
        "measure": "Concháa média cháeia",
        "grams": 170.0,
        "label": "Concháa média cháeia (170g)"
      },
      {
        "measure": "Colher de arroz cháeia",
        "grams": 40.0,
        "label": "Colher de arroz cháeia (40g)"
      }
    ],
    "SUCO DE ABACAXI C AC": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 165.0,
        "label": "Copo pequeno (165ml) (165g)"
      }
    ],
    "SUCO DE ACEROLA C AC": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 165.0,
        "label": "Copo pequeno (165ml) (165g)"
      }
    ],
    "SUCO DE BETERRABA C AC": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 165.0,
        "label": "Copo pequeno (165ml) (165g)"
      }
    ],
    "SUCO DE CUPUACU C AC": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 165.0,
        "label": "Copo pequeno (165ml) (165g)"
      },
      {
        "measure": "Copop Ch",
        "grams": 165.0,
        "label": "Copop Ch (165g)"
      }
    ],
    "SUCO DE LARANJA C AC": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 165.0,
        "label": "Copo pequeno (165ml) (165g)"
      }
    ],
    "BANANA C AC": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      }
    ],
    "BETERRABA C AC": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      }
    ],
    "E CENOURA": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      }
    ],
    "CENOURA C AC": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 165.0,
        "label": "Copo pequeno (165ml) (165g)"
      }
    ],
    "E BETERRABA C AC": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 165.0,
        "label": "Copo pequeno (165ml) (165g)"
      }
    ],
    "SUCO DE MAMAO C AC": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 165.0,
        "label": "Copo pequeno (165ml) (165g)"
      }
    ],
    "SUCO DE MANGA C AC": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 165.0,
        "label": "Copo pequeno (165ml) (165g)"
      }
    ],
    "SUCO DE MARACUJA": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 165.0,
        "label": "Copo pequeno (165ml) (165g)"
      }
    ],
    "SUFLE DE LEGUMES": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 85.0,
        "label": "Colher de arroz cháeia (85g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 25.0,
        "label": "Colher de sopa cháeia (25g)"
      }
    ],
    "SUFLE DE QUEIJO": [
      {
        "measure": "Pedaço grande",
        "grams": 1200.0,
        "label": "Pedaço grande (1200g)"
      },
      {
        "measure": "Pedaço médio",
        "grams": 90.0,
        "label": "Pedaço médio (90g)"
      },
      {
        "measure": "Pedaço pequeno",
        "grams": 700.0,
        "label": "Pedaço pequeno (700g)"
      }
    ],
    "SUSPIRO": [
      {
        "measure": "Unidade grande",
        "grams": 60.0,
        "label": "Unidade grande (60g)"
      },
      {
        "measure": "Unidade média",
        "grams": 1060.0,
        "label": "Unidade média (1060g)"
      }
    ],
    "SUSTAGEN": [
      {
        "measure": "Colher de cháá cháeia",
        "grams": 7.0,
        "label": "Colher de cháá cháeia (7g)"
      },
      {
        "measure": "Colher de cháá rasa",
        "grams": 5.0,
        "label": "Colher de cháá rasa (5g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 18.0,
        "label": "Colher de sopa cháeia (18g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 25.0,
        "label": "Colher de sopa rasa (25g)"
      }
    ],
    "TANGERINA": [
      {
        "measure": "Gomo M",
        "grams": 1060.0,
        "label": "Gomo M (1060g)"
      },
      {
        "measure": "Unidade média",
        "grams": 1350.0,
        "label": "Unidade média (1350g)"
      }
    ],
    "TOMATE": [
      {
        "measure": "Fatia média",
        "grams": 20.0,
        "label": "Fatia média (20g)"
      },
      {
        "measure": "Fatia fina",
        "grams": 10.0,
        "label": "Fatia fina (10g)"
      },
      {
        "measure": "Fatia grossa",
        "grams": 30.0,
        "label": "Fatia grossa (30g)"
      },
      {
        "measure": "Unidade média",
        "grams": 100.0,
        "label": "Unidade média (100g)"
      },
      {
        "measure": "Unidade pequena",
        "grams": 60.0,
        "label": "Unidade pequena (60g)"
      },
      {
        "measure": "Unidade grande",
        "grams": 150.0,
        "label": "Unidade grande (150g)"
      },
      {
        "measure": "Rodela média",
        "grams": 15.0,
        "label": "Rodela média (15g)"
      }
    ],
    "TORTA DE LIMAO": [
      {
        "measure": "Fatia grande",
        "grams": 120.0,
        "label": "Fatia grande (120g)"
      },
      {
        "measure": "Fatia média",
        "grams": 85.0,
        "label": "Fatia média (85g)"
      },
      {
        "measure": "Fatia pequena",
        "grams": 60.0,
        "label": "Fatia pequena (60g)"
      }
    ],
    "MCDONALD S": [
      {
        "measure": "Unidade",
        "grams": 85.0,
        "label": "Unidade (85g)"
      },
      {
        "measure": "Concháa média cháeia",
        "grams": 190.0,
        "label": "Concháa média cháeia (190g)"
      },
      {
        "measure": "Colher de arroz cháeia",
        "grams": 85.0,
        "label": "Colher de arroz cháeia (85g)"
      },
      {
        "measure": "Colher de arroz rasa",
        "grams": 50.0,
        "label": "Colher de arroz rasa (50g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 35.0,
        "label": "Colher de sopa cháeia (35g)"
      },
      {
        "measure": "Escumadeira média cháeia",
        "grams": 140.0,
        "label": "Escumadeira média cháeia (140g)"
      },
      {
        "measure": "Prato raso",
        "grams": 280.0,
        "label": "Prato raso (280g)"
      }
    ],
    "UISQUE": [
      {
        "measure": "Dose",
        "grams": 50.0,
        "label": "Dose (50g)"
      }
    ],
    "UVA PASSA": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 18.0,
        "label": "Colher de sopa cháeia (18g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 25.0,
        "label": "Colher de sopa rasa (25g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 1250.0,
        "label": "Copo pequeno (165ml) (1250g)"
      },
      {
        "measure": "Punhado",
        "grams": 240.0,
        "label": "Punhado (240g)"
      },
      {
        "measure": "Unidade",
        "grams": 3.0,
        "label": "Unidade (3g)"
      }
    ],
    "VAGEM COZIDA": [
      {
        "measure": "Colher de sopa cháeia",
        "grams": 20.0,
        "label": "Colher de sopa cháeia (20g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 15.0,
        "label": "Colher de sopa rasa (15g)"
      }
    ],
    "VAGEM REFOGADA": [
      {
        "measure": "Colher de arroz cháeia",
        "grams": 73.0,
        "label": "Colher de arroz cháeia (73g)"
      },
      {
        "measure": "Colher de arroz rasa",
        "grams": 45.0,
        "label": "Colher de arroz rasa (45g)"
      },
      {
        "measure": "Colher de sopa cháeia",
        "grams": 35.0,
        "label": "Colher de sopa cháeia (35g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 15.0,
        "label": "Colher de sopa rasa (15g)"
      }
    ],
    "VINHO": [
      {
        "measure": "Copo duplo (240ml) (240ml)",
        "grams": 240.0,
        "label": "Copo duplo (240ml) (240ml) (240g)"
      },
      {
        "measure": "Copo pequeno (165ml)",
        "grams": 165.0,
        "label": "Copo pequeno (165ml) (165g)"
      },
      {
        "measure": "Caneca",
        "grams": 300.0,
        "label": "Caneca (300g)"
      },
      {
        "measure": "Unidade",
        "grams": 80.0,
        "label": "Unidade (80g)"
      }
    ],
    "ARROZ COZIDO": [
      {
        "measure": "Colher de sopa cheia",
        "grams": 25.0,
        "label": "Colher de sopa cheia (25g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 15.0,
        "label": "Colher de sopa rasa (15g)"
      },
      {
        "measure": "Colher de arroz cheia",
        "grams": 45.0,
        "label": "Colher de arroz cheia (45g)"
      },
      {
        "measure": "Colher de arroz rasa",
        "grams": 30.0,
        "label": "Colher de arroz rasa (30g)"
      },
      {
        "measure": "Escumadeira média cheia",
        "grams": 85.0,
        "label": "Escumadeira média cheia (85g)"
      },
      {
        "measure": "Escumadeira média rasa",
        "grams": 60.0,
        "label": "Escumadeira média rasa (60g)"
      },
      {
        "measure": "1/2 Concha média",
        "grams": 60.0,
        "label": "1/2 Concha média (60g)"
      },
      {
        "measure": "Concha média cheia",
        "grams": 100.0,
        "label": "Concha média cheia (100g)"
      },
      {
        "measure": "Prato raso",
        "grams": 250.0,
        "label": "Prato raso (250g)"
      }
    ],
    "ARROZ BRANCO COZIDO": [
      {
        "measure": "Colher de sopa cheia",
        "grams": 25.0,
        "label": "Colher de sopa cheia (25g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 15.0,
        "label": "Colher de sopa rasa (15g)"
      },
      {
        "measure": "Colher de arroz cheia",
        "grams": 45.0,
        "label": "Colher de arroz cheia (45g)"
      },
      {
        "measure": "Colher de arroz rasa",
        "grams": 30.0,
        "label": "Colher de arroz rasa (30g)"
      },
      {
        "measure": "Escumadeira média cheia",
        "grams": 85.0,
        "label": "Escumadeira média cheia (85g)"
      },
      {
        "measure": "Escumadeira média rasa",
        "grams": 60.0,
        "label": "Escumadeira média rasa (60g)"
      },
      {
        "measure": "1/2 Concha média",
        "grams": 60.0,
        "label": "1/2 Concha média (60g)"
      },
      {
        "measure": "Concha média cheia",
        "grams": 100.0,
        "label": "Concha média cheia (100g)"
      },
      {
        "measure": "Prato raso",
        "grams": 250.0,
        "label": "Prato raso (250g)"
      }
    ],
    "FEIJAO COZIDO": [
      {
        "measure": "Concha média cheia",
        "grams": 140.0,
        "label": "Concha média cheia (140g)"
      },
      {
        "measure": "Concha média rasa",
        "grams": 85.0,
        "label": "Concha média rasa (85g)"
      },
      {
        "measure": "Concha pequena cheia",
        "grams": 90.0,
        "label": "Concha pequena cheia (90g)"
      },
      {
        "measure": "Colher de sopa cheia",
        "grams": 25.0,
        "label": "Colher de sopa cheia (25g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 16.0,
        "label": "Colher de sopa rasa (16g)"
      }
    ],
    "FEIJAO CARIOCA COZIDO": [
      {
        "measure": "Concha média cheia",
        "grams": 140.0,
        "label": "Concha média cheia (140g)"
      },
      {
        "measure": "Concha média rasa",
        "grams": 85.0,
        "label": "Concha média rasa (85g)"
      },
      {
        "measure": "Concha pequena cheia",
        "grams": 90.0,
        "label": "Concha pequena cheia (90g)"
      },
      {
        "measure": "Colher de sopa cheia",
        "grams": 25.0,
        "label": "Colher de sopa cheia (25g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 16.0,
        "label": "Colher de sopa rasa (16g)"
      }
    ],
    "FEIJAO PRETO COZIDO": [
      {
        "measure": "Concha média cheia",
        "grams": 140.0,
        "label": "Concha média cheia (140g)"
      },
      {
        "measure": "Concha média rasa",
        "grams": 85.0,
        "label": "Concha média rasa (85g)"
      },
      {
        "measure": "Concha pequena cheia",
        "grams": 90.0,
        "label": "Concha pequena cheia (90g)"
      },
      {
        "measure": "Colher de sopa cheia",
        "grams": 25.0,
        "label": "Colher de sopa cheia (25g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 16.0,
        "label": "Colher de sopa rasa (16g)"
      }
    ],
    "PATINHO MOIDO": [
      {
        "measure": "Colher de sopa cheia",
        "grams": 30.0,
        "label": "Colher de sopa cheia (30g)"
      },
      {
        "measure": "Colher de sopa rasa",
        "grams": 20.0,
        "label": "Colher de sopa rasa (20g)"
      },
      {
        "measure": "Colher de arroz cheia",
        "grams": 50.0,
        "label": "Colher de arroz cheia (50g)"
      },
      {
        "measure": "Porção média",
        "grams": 100.0,
        "label": "Porção média (100g)"
      },
      {
        "measure": "Porção grande",
        "grams": 150.0,
        "label": "Porção grande (150g)"
      }
    ]
  },
  "genericas": [
    {
      "measure": "Colher de sopa cheia",
      "grams": 25.0,
      "label": "Colher de sopa cheia (25g)"
    },
    {
      "measure": "Colher de sopa rasa",
      "grams": 15.0,
      "label": "Colher de sopa rasa (15g)"
    },
    {
      "measure": "Colher de arroz cheia",
      "grams": 45.0,
      "label": "Colher de arroz cheia (45g)"
    },
    {
      "measure": "Colher de arroz rasa",
      "grams": 30.0,
      "label": "Colher de arroz rasa (30g)"
    },
    {
      "measure": "Colher de sobremesa cheia",
      "grams": 15.0,
      "label": "Colher de sobremesa cheia (15g)"
    },
    {
      "measure": "Colher de sobremesa rasa",
      "grams": 10.0,
      "label": "Colher de sobremesa rasa (10g)"
    },
    {
      "measure": "Colher de chá cheia",
      "grams": 8.0,
      "label": "Colher de chá cheia (8g)"
    },
    {
      "measure": "Colher de chá rasa",
      "grams": 5.0,
      "label": "Colher de chá rasa (5g)"
    },
    {
      "measure": "Colher de café rasa",
      "grams": 2.0,
      "label": "Colher de café rasa (2g)"
    },
    {
      "measure": "Concha média cheia",
      "grams": 130.0,
      "label": "Concha média cheia (130g)"
    },
    {
      "measure": "Concha média rasa",
      "grams": 85.0,
      "label": "Concha média rasa (85g)"
    },
    {
      "measure": "Escumadeira média cheia",
      "grams": 80.0,
      "label": "Escumadeira média cheia (80g)"
    },
    {
      "measure": "Escumadeira média rasa",
      "grams": 50.0,
      "label": "Escumadeira média rasa (50g)"
    },
    {
      "measure": "Xícara de chá (150ml)",
      "grams": 150.0,
      "label": "Xícara de chá (150ml) (150g)"
    },
    {
      "measure": "Xícara de café (50ml)",
      "grams": 50.0,
      "label": "Xícara de café (50ml) (50g)"
    },
    {
      "measure": "Copo americano (200ml)",
      "grams": 200.0,
      "label": "Copo americano (200ml) (200g)"
    },
    {
      "measure": "Copo duplo (240ml)",
      "grams": 240.0,
      "label": "Copo duplo (240ml) (240g)"
    },
    {
      "measure": "Fatia média",
      "grams": 30.0,
      "label": "Fatia média (30g)"
    },
    {
      "measure": "Fatia grande",
      "grams": 50.0,
      "label": "Fatia grande (50g)"
    },
    {
      "measure": "Unidade média",
      "grams": 100.0,
      "label": "Unidade média (100g)"
    },
    {
      "measure": "Bife / Filé médio",
      "grams": 100.0,
      "label": "Bife / Filé médio (100g)"
    },
    {
      "measure": "Porção média",
      "grams": 100.0,
      "label": "Porção média (100g)"
    },
    {
      "measure": "Prato raso",
      "grams": 250.0,
      "label": "Prato raso (250g)"
    }
  ]
};
