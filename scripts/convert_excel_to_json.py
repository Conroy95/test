import pandas as pd
import json
import sys

def main():
    excel_path = 'data/locations.xlsx'
    json_path = 'data/locations.json'

    try:
        df = pd.read_excel(excel_path)
    except Exception as e:
        print(f"Fout bij het laden van Excel bestand: {e}")
        sys.exit(1)

    records = df.to_dict(orient='records')

    try:
        with open(json_path, 'w', encoding='utf-8') as f:
            json.dump(records, f, ensure_ascii=False, indent=2)
    except Exception as e:
        print(f"Fout bij het schrijven van JSON bestand: {e}")
        sys.exit(1)

    print("Conversie geslaagd!")

if __name__ == '__main__':
    main()
