document.addEventListener('DOMContentLoaded', () => {
  // Functie om de Excel-bestanden in te lezen
  function loadExcelData(file) {
    const reader = new FileReader();

    reader.onload = function(event) {
      const data = event.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });

      // Verkrijg de eerste sheet
      const sheet = workbook.Sheets[workbook.SheetNames[0]];

      // Zet de data om naar een JSON-object
      const rows = XLSX.utils.sheet_to_json(sheet);

      // Voeg de data toe aan de tabel
      displayData(rows);
    };

    reader.readAsBinaryString(file);
  }

  // Functie om de data in de tabel te tonen
  function displayData(rows) {
    const tableBody = document.getElementById('car-data');

    rows.forEach(row => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><img src="${row['Merk Logo']}" alt="${row['Merknaam']} logo"></td>
        <td>${row['Merknaam']}</td>
        <td>${row['Model']}</td>
        <td>${row['Jaar']}</td>
        <td>${row['Schaal']}</td>
        <td>${row['Categorie']}</td>
        <td>${row['Opmerking']}</td>
      `;
      tableBody.appendChild(tr);
    });
  }

  // Upload bestand selecteren
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.xlsx';
  input.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
      loadExcelData(file);
    }
  });

  // Voeg de upload knop toe aan de pagina
  const uploadBtn = document.createElement('button');
  uploadBtn.textContent = 'Upload Excel Bestand';
  uploadBtn.addEventListener('click', () => {
    input.click();
  });

  document.body.insertBefore(uploadBtn, document.body.firstChild);
});
