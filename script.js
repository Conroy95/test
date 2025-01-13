// Voorbeeldgegevens van miniatuurauto's
const autos = [
    {
        logo: "https://via.placeholder.com/100x50?text=Merk1",
        merknaam: "Merk1",
        model: "Model A",
        jaar: 2020,
        schaal: "1:18",
        categorie: "Sportwagen",
        opmerking: "Limited edition"
    },
    {
        logo: "https://via.placeholder.com/100x50?text=Merk2",
        merknaam: "Merk2",
        model: "Model B",
        jaar: 2018,
        schaal: "1:24",
        categorie: "Classic",
        opmerking: "Vintage model"
    },
    {
        logo: "https://via.placeholder.com/100x50?text=Merk3",
        merknaam: "Merk3",
        model: "Model C",
        jaar: 2022,
        schaal: "1:43",
        categorie: "SUV",
        opmerking: "Nieuwste model"
    }
    // Voeg hier meer auto-objecten toe
];

// Functie om de auto's weer te geven op de pagina
function toonAutos(autos) {
    const autoLijst = document.getElementById("autoLijst");
    autoLijst.innerHTML = ''; // Maak de lijst leeg voor nieuwe weergave

    autos.forEach(auto => {
        const autoCard = document.createElement("div");
        autoCard.classList.add("auto-card");

        autoCard.innerHTML = `
            <img src="${auto.logo}" alt="${auto.merknaam}">
            <h3>${auto.merknaam} - ${auto.model}</h3>
            <p><strong>Jaar:</strong> ${auto.jaar}</p>
            <p><strong>Schaal:</strong> ${auto.schaal}</p>
            <p><strong>Categorie:</strong> ${auto.categorie}</p>
            <p><strong>Opmerking:</strong> ${auto.opmerking}</p>
        `;

        autoLijst.appendChild(autoCard);
    });
}

// Zoek- en filterfunctie
document.getElementById("searchInput").addEventListener("input", function() {
    const zoekterm = this.value.toLowerCase();
    const gefilterdeAutos = autos.filter(auto => {
        return auto.merknaam.toLowerCase().includes(zoekterm) ||
               auto.model.toLowerCase().includes(zoekterm) ||
               auto.categorie.toLowerCase().includes(zoekterm);
    });
    toonAutos(gefilterdeAutos);
});

// Toon alle auto's bij het laden van de pagina
toonAutos(autos);
