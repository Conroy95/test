// Dit is een voorbeeld van enkele items in je collectie
const diecastItems = [
  {
    name: 'Ferrari F40',
    image: 'https://via.placeholder.com/200',
    category: 'Sportwagen',
    description: 'Een iconische sportwagen uit de jaren 90, beroemd om zijn prestaties.',
  },
  {
    name: 'Porsche 911',
    image: 'https://via.placeholder.com/200',
    category: 'Sportwagen',
    description: 'Een van de meest legendarische sportwagens ooit geproduceerd.',
  },
  {
    name: 'Volkswagen Beetle',
    image: 'https://via.placeholder.com/200',
    category: 'Classic',
    description: 'Een klassieker die wereldwijd bekend is geworden door zijn unieke ontwerp.',
  },
];

// Functie om de collectie weer te geven
function renderCollection() {
  const collectionContainer = document.querySelector('.collection');
  collectionContainer.innerHTML = ''; // Maak de container leeg

  diecastItems.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h2>${item.name}</h2>
      <p><strong>Categorie:</strong> ${item.category}</p>
      <p><strong>Omschrijving:</strong> ${item.description}</p>
    `;

    collectionContainer.appendChild(itemDiv);
  });
}

// Roep de renderCollection functie aan om de items weer te geven
renderCollection();
