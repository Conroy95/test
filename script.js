document.addEventListener("DOMContentLoaded", function() {
    const autoContainer = document.getElementById("auto-container");
    const searchInput = document.getElementById("search");
    const filterSelect = document.getElementById("filter");

    let autos = [];

    // Data ophalen uit JSON
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            autos = data;
            localStorage.setItem("autos", JSON.stringify(autos));
            toonAutos(autos);
        });

    // Functie om auto's te tonen
    function toonAutos(data) {
        autoContainer.innerHTML = "";
        data.forEach(auto => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="${auto.Afbeelding}" alt="${auto.Merk} ${auto.Type}">
                <h2>${auto.Merk} ${auto.Type}</h2>
                <p><strong>Schaal:</strong> ${auto.Schaal}</p>
                <p>${auto.Omschrijving}</p>
                <p><strong>Categorie:</strong> ${auto.Categorie}</p>
                <a class="ui red fa fa-tag label">Red</a>
                <p><strong>Prijs:</strong> ${auto.Prijs}</p>
            `;
            autoContainer.appendChild(card);
        });
    }

    // Zoekfunctie
    searchInput.addEventListener("input", function() {
        const zoekwaarde = searchInput.value.toLowerCase();
        const gefilterdeAutos = autos.filter(auto =>
            auto.Merk.toLowerCase().includes(zoekwaarde) ||
            auto.Type.toLowerCase().includes(zoekwaarde)
        );
        toonAutos(gefilterdeAutos);
    });

    // Filterfunctie
    filterSelect.addEventListener("change", function() {
        const geselecteerdeCategorie = filterSelect.value;
        if (geselecteerdeCategorie === "all") {
            toonAutos(autos);
        } else {
            const gefilterdeAutos = autos.filter(auto => auto.Categorie === geselecteerdeCategorie);
            toonAutos(gefilterdeAutos);
        }
    });
});
