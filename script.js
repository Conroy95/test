// Voorbeeldgegevens van miniatuurauto's
const autos = [
    {
        logo: "igm/dodge.png",
        merknaam: "Dodge",
        model: "Monaco",
        jaar: 1974,
        schaal: "1:18",
        categorie: "Street",
        opmerking: "Bluesmobile Look a Like"
    },
    {
        logo: "img/dodge.png",
        merknaam: "Dodge",
        model: "Monaco",
        jaar: 1974,
        schaal: "1:18",
        categorie: "Street",
        opmerking: "Chicago Police Look a Like"
    },
    {
        logo: "img/spark.png",
        merknaam: "GIBSON NO.37 JACKIE CHAN DC RACING 3RD",
        model: "ORECA 07",
        jaar: 2017,
        schaal: "1:43",
        categorie: "24H LE MANS",
        opmerking: "S5823 - Spark - 1:43"
    },
    {
        logo: "img/spark.png",
        merknaam: "GIBSON NO.47 CETILAR VILLORBA CORSE",
        model: "DALLARA P217",
        jaar: 2018,
        schaal: "1:43",
        categorie: "24H LE MANS",
        opmerking: "S7027 - Spark - 1:43"
    },
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
