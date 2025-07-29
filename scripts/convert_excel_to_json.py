import pandas as pd
import json
from datetime import datetime
from pathlib import Path

class CustomEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, (pd.Timestamp, datetime)):
            return obj.strftime('%Y-%m-%d')
        if pd.isna(obj):
            return None
        return super().default(obj)

def main():
    input_path = Path('data/locations.xlsx')
    output_path = Path('data/locations.json')

    if not input_path.exists():
        print(f"❌ Excel-bestand niet gevonden: {input_path}")
        return

    df = pd.read_excel(input_path)

    records = df.to_dict(orient='records')

    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            json.dump(records, f, ensure_ascii=False, indent=2, cls=CustomEncoder)
        print(f"✅ JSON gegenereerd: {output_path}")
    except Exception as e:
        print("❌ Fout bij schrijven JSON:", e)

if __name__ == '__main__':
    main()
