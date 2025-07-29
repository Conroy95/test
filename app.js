const locationsListEl = document.getElementById('locations-list');
const locationDetailEl = document.getElementById('location-detail');

let locationsData = [];

async function fetchLocations() {
  try {
    const response = await fetch('data/locations.json');
    locationsData = await response.json();
    renderLocationsList();
  } catch (err) {
    locationsListEl.textContent = 'Kon data niet laden.';
    console.error(err);
  }
}

function renderLocationsList() {
  locationDetailEl.classList.add('hidden');
  locationsListEl.innerHTML = '';

  locationsData.forEach((loc, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.tabIndex = 0;
    card.innerHTML = `
      <img src="img/${loc.Foto}" alt="${loc.Plaats}" />
      <h3>${loc.Plaats} (${loc.Datum})</h3>
    `;
    card.addEventListener('click', () => showLocationDetail(index));
    card.addEventListener('keypress', e => { if (e.key === 'Enter') showLocationDetail(index); });

    locationsListEl.appendChild(card);
  });
}

function showLocationDetail(index) {
  const loc = locationsData[index];
  locationsListEl.innerHTML = '';
  locationDetailEl.classList.remove('hidden');
  locationDetailEl.innerHTML = `
    <button id="back-btn">Terug</button>
    <h2>${loc.Plaats} - Dag ${loc.Dag}</h2>
    <img src="img/${loc.Foto}" alt="${loc.Plaats}" style="max-width:100%;border-radius:8px;"/>
    <ul>
      <li><strong>Datum:</strong> ${loc.Datum}</li>
      <li><strong>Staat:</strong> ${loc.Staat || '-'}</li>
      <li><strong>Bezienswaardigheid:</strong> ${loc.Bezienswaardigheid || '-'}</li>
      <li><strong>Opmerkingen:</strong> ${loc.Opmerkingen || '-'}</li>
      <li><strong>Programma:</strong> ${loc.Programma || '-'}</li>
      <li><strong>Hotel:</strong> ${loc.Hotel || '-'}</li>
      <li><strong>Uitstapjes:</strong> ${loc.Uitstapjes || '-'}</li>
      <li><strong>Coördinaten:</strong> ${loc['Locatie-coordinaten'] || '-'}</li>
    </ul>
  `;
  document.getElementById('back-btn').addEventListener('click', () => {
    renderLocationsList();
  });
}

fetchLocations();
