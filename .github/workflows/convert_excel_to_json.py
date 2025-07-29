import pandas as pd
import json

excel_path = 'data/locations.xlsx'
json_path = 'data/locations.json'

df = pd.read_excel(excel_path)

# Optioneel: schoonmaken / converteren
records = df.to_dict(orient='records')

with open(json_path, 'w', encoding='utf-8') as f:
    json.dump(records, f, ensure_ascii=False, indent=2)

print(f"Converted {excel_path} to {json_path}")
