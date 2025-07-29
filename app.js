const locationsListEl = document.getElementById('locations-list');
const locationDetailEl = document.getElementById('location-detail');
const homeBtn = document.getElementById('home-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let locationsData = [];
let groupedByDay = [];
let currentDayIndex = null;

async function fetchLocations() {
  try {
    const response = await fetch('data/locations.json');
    locationsData = await response.json();
    groupLocationsByDay();
    renderLocationsList();
  } catch (err) {
    locationsListEl.textContent = 'Kon data niet laden.';
    console.error(err);
  }
}

function groupLocationsByDay() {
  const grouped = {};
  locationsData.forEach(loc => {
    const day = loc.Dag;
    if (!grouped[day]) grouped[day] = [];
    grouped[day].push(loc);
  });
  groupedByDay = Object.keys(grouped)
    .sort((a, b) => Number(a) - Number(b))
    .map(day => ({ day, locations: grouped[day] }));
}

function renderLocationsList() {
  locationDetailEl.classList.add('hidden');
  locationsListEl.innerHTML = '';
  currentDayIndex = null;
  updateNavButtons();

  groupedByDay.forEach(group => {
    const title = document.createElement('h2');
    title.textContent = `Dag ${group.day} – ${group.locations[0].Datum}`;
    locationsListEl.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'grid';

    group.locations.forEach(loc => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="img/${loc.Foto}" alt="${loc.Plaats}" />
        <h3>${loc.Plaats}</h3>
        <p>${loc.Bezienswaardigheid || ''}</p>
      `;
      card.addEventListener('click', () => showLocationDetail(group.day));
      grid.appendChild(card);
    });

    locationsListEl.appendChild(grid);
  });
}

function showLocationDetail(day) {
  currentDayIndex = groupedByDay.findIndex(g => g.day === day);
  updateNavButtons();

  const group = groupedByDay[currentDayIndex];
  locationDetailEl.classList.remove('hidden');
  locationsListEl.innerHTML = '';

  let html = `<button id="back-btn">Terug</button>`;
  html += `<h2>Dag ${group.day} – ${group.locations[0].Datum}</h2>`;

  group.locations.forEach(loc => {
    html += `
      <section>
        <img src="img/${loc.Foto}" alt="${loc.Plaats}" />
        <h3>${loc.Plaats}</h3>
        <ul>
          <li><strong>Bezienswaardigheid:</strong> ${loc.Bezienswaardigheid || '-'}</li>
          <li><strong>Opmerkingen:</strong> ${loc.Opmerkingen || '-'}</li>
          <li><strong>Programma:</strong> ${loc.Programma || '-'}</li>
          <li><strong>Hotel:</strong> ${loc.Hotel || '-'}</li>
          <li><strong>Uitstapjes:</strong> ${loc.Uitstapjes || '-'}</li>
          <li><strong>Coördinaten:</strong> ${loc['Locatie-coordinaten'] || '-'}</li>
        </ul>
      </section>
    `;
  });

  locationDetailEl.innerHTML = html;
  document.getElementById('back-btn').addEventListener('click', renderLocationsList);
}

function updateNavButtons() {
  homeBtn.disabled = currentDayIndex === null;
  prevBtn.disabled = currentDayIndex <= 0;
  nextBtn.disabled = currentDayIndex === null || currentDayIndex >= groupedByDay.length - 1;
}

homeBtn.addEventListener('click', renderLocationsList);
prevBtn.addEventListener('click', () => showLocationDetail(groupedByDay[currentDayIndex - 1].day));
nextBtn.addEventListener('click', () => showLocationDetail(groupedByDay[currentDayIndex + 1].day));

fetchLocations();
