# scripts/convert_excel_to_json.py
import pandas as pd
import json

def main():
    input_path = 'data/locations.xlsx'
    output_path = 'data/locations.json'
    df = pd.read_excel(input_path)
    records = df.to_dict(orient='records')
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(records, f, ensure_ascii=False, indent=2)

if __name__ == '__main__':
    main()
