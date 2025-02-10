document.addEventListener("DOMContentLoaded", loadCollection);

document.getElementById("carForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let merk = document.getElementById("merk").value;
    let type = document.getElementById("type").value;
    let code = document.getElementById("code").value;
    let omschrijving = document.getElementById("omschrijving").value;
    let imageFile = document.getElementById("imageUpload").files[0];

    if (imageFile) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let newCar = { merk, type, code, omschrijving, image: e.target.result };
            saveCar(newCar);
        };
        reader.readAsDataURL(imageFile);
    }
});

function saveCar(car) {
    let collection = JSON.parse(localStorage.getItem("miniatuurCollectie")) || [];
    collection.push(car);
    localStorage.setItem("miniatuurCollectie", JSON.stringify(collection));
    loadCollection();
}

function loadCollection() {
    let collectionGrid = document.getElementById("collectionGrid");
    collectionGrid.innerHTML = "";
    let collection = JSON.parse(localStorage.getItem("miniatuurCollectie")) || [];

    collection.forEach((car, index) => {
        let carDiv = document.createElement("div");
        carDiv.classList.add("car-item");
        carDiv.innerHTML = `
            <img src="${car.image}" alt="${car.merk} ${car.type}">
            <h3>${car.merk} ${car.type}</h3>
            <p><strong>Code:</strong> ${car.code}</p>
            <p>${car.omschrijving}</p>
            <button onclick="deleteCar(${index})">Verwijderen</button>
        `;
        collectionGrid.appendChild(carDiv);
    });
}

function deleteCar(index) {
    let collection = JSON.parse(localStorage.getItem("miniatuurCollectie")) || [];
    collection.splice(index, 1);
    localStorage.setItem("miniatuurCollectie", JSON.stringify(collection));
    loadCollection();
}

function filterCollection() {
    let searchValue = document.getElementById("search").value.toLowerCase();
    let carItems = document.querySelectorAll(".car-item");

    carItems.forEach(item => {
        let title = item.querySelector("h3").textContent.toLowerCase();
        item.style.display = title.includes(searchValue) ? "block" : "none";
    });
}