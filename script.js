document.getElementById("diecastForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let type = document.getElementById("type").value;
    let description = document.getElementById("description").value;
    let photoInput = document.getElementById("photo");
    
    if (!name || !type) {
        alert("Naam en type zijn verplicht!");
        return;
    }
    
    let reader = new FileReader();
    reader.onload = function() {
        let diecast = { name, type, description, photo: reader.result };
        let collection = JSON.parse(localStorage.getItem("diecastCollection")) || [];
        collection.push(diecast);
        localStorage.setItem("diecastCollection", JSON.stringify(collection));
        displayCollection();
    };
    
    if (photoInput.files[0]) {
        reader.readAsDataURL(photoInput.files[0]);
    } else {
        reader.onload();
    }

    this.reset();
});

function displayCollection() {
    let collectionDiv = document.getElementById("collection");
    collectionDiv.innerHTML = "";
    let collection = JSON.parse(localStorage.getItem("diecastCollection")) || [];
    
    collection.forEach((item, index) => {
        let div = document.createElement("div");
        div.innerHTML = `<h3>${item.name} (${item.type})</h3>
                         <p>${item.description}</p>
                         ${item.photo ? `<img src="${item.photo}" alt="${item.name}">` : ""}
                         <button onclick="deleteItem(${index})">Verwijderen</button>`;
        collectionDiv.appendChild(div);
    });
}

function deleteItem(index) {
    let collection = JSON.parse(localStorage.getItem("diecastCollection")) || [];
    collection.splice(index, 1);
    localStorage.setItem("diecastCollection", JSON.stringify(collection));
    displayCollection();
}

window.onload = displayCollection;