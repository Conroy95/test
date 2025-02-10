document.addEventListener("DOMContentLoaded", function () {
    fetch("data.json")
        .then(response => response.json())
        .then(data => {
            const gridContainer = document.getElementById("grid-container");

            data.forEach(auto => {
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                    <img src="${auto.afbeelding}" alt="${auto.merk} ${auto.type}">
                    <h2>${auto.merk} ${auto.type}</h2>
                    <p><strong>Schaal:</strong> ${auto.schaal}</p>
                    <p>${auto.omschrijving}</p>
                    <p><strong>Code:</strong> ${auto.code}</p>
                `;

                gridContainer.appendChild(card);
            });
        })
        .catch(error => console.error("Fout bij laden van data:", error));
});
