import pandas as pd
import json

def main():
    input_path = 'data/locations.xlsx'
    output_path = 'data/locations.json'

    # Lees Excel
    df = pd.read_excel(input_path)

    # Zet datumkolommen om naar string-formaat
    if 'Datum' in df.columns:
        df['Datum'] = df['Datum'].astype(str)

    # Converteer naar JSON
    records = df.to_dict(orient='records')
    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(records, f, ensure_ascii=False, indent=2)
        print("✅ JSON succesvol geschreven naar", output_path)
    except Exception as e:
        print("❌ Fout bij het schrijven van JSON bestand:", e)

if __name__ == '__main__':
    main()
