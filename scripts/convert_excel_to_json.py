import pandas as pd
import json

def main():
    excel_path = 'data/locations.xlsx'
    json_path = 'data/locations.json'

    # Excel inladen (als meerdere sheets: sheet_name=None)
    df = pd.read_excel(excel_path)

    # Data schoonmaken en naar JSON
    records = df.to_dict(orient='records')

    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(records, f, ensure_ascii=False, indent=2)

if __name__ == '__main__':
    main()
