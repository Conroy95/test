// Voorbeeldgegevens van miniatuurauto's
const autos = [
    {
        logo: "img/S5823.png",
        merknaam: "GIBSON NO.37 JACKIE CHAN DC RACING 3RD",
        model: "ORECA 07",
        jaar: 2017,
        schaal: "1:43",
        categorie: "24H LE MANS",
        opmerking: "S5823 - Spark - 1:43"
    },
    {
        logo: "img/S7027.png",
        merknaam: "GIBSON NO.47 CETILAR VILLORBA CORSE",
        model: "DALLARA P217",
        jaar: 2018,
        schaal: "1:43",
        categorie: "24H LE MANS",
        opmerking: "S7027 - Spark - 1:43"
    },
    {
        logo: "img/S7955.png",
        merknaam: "GIBSON NO.1 REBELLION RACING 2ND",
        model: "REBELLION R13",
        jaar: 2020,
        schaal: "1:43",
        categorie: "24H LE MANS",
        opmerking: "S7955 - Spark - 1:43"
    },
    {
        logo: "img/S7015.png",
        merknaam: "GIBSON NO.29 RACING TEAM NEDERLAN",
        model: "DALLARA P217",
        jaar: 2018,
        schaal: "1:43",
        categorie: "24H LE MANS",
        opmerking: "S7015 - Spark - 1:43"
    },
    {
        logo: "img/S7664.png",
        merknaam: "NO.14 ALPINE F1 TEAM BAHRAIN GP 2021 FERNANDO",
        model: "ALPINE A521",
        jaar: 2021,
        schaal: "1:43",
        categorie: "Formula One",
        opmerking: "S7664 - Spark - 1:43"
    },
    {
        logo: "img/0954.png",
        merknaam: "Dakar Buggy",
        model: "Tim/Tom Coronel Dakar Team",
        jaar: 2017,
        schaal: "1:43",
        categorie: "Dakar",
        opmerking: "0954 - Spark - 1:43"
    },
    {
        logo: "img/helm.png",
        merknaam: "Helm Miami GP",
        model: "Max Verstappen",
        jaar: 2022,
        schaal: "1:2",
        categorie: "Formula One",
        opmerking: "35 - Schuberth"
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
