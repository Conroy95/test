let carData = [
    { brandLogo: 'logo1.png', brand: 'Mercedes', model: 'AMG GT', year: 2021, scale: '1:18', category: 'Sport', comment: 'Special Edition' },
    { brandLogo: 'logo2.png', brand: 'Ferrari', model: '488 GTB', year: 2020, scale: '1:24', category: 'Sport', comment: 'Limited' },
    { brandLogo: 'logo3.png', brand: 'BMW', model: 'X5', year: 2019, scale: '1:18', category: 'SUV', comment: 'Black Edition' },
    { brandLogo: 'logo4.png', brand: 'Porsche', model: '911 Turbo', year: 2018, scale: '1:43', category: 'Classic', comment: 'Mint Condition' }
    // Voeg hier je andere miniatuurauto's toe
];

function loadTable() {
    const tableBody = document.getElementById("carTableBody");
    tableBody.innerHTML = "";

    carData.forEach(car => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td><img src="${car.brandLogo}" alt="${car.brand} logo"></td>
            <td>${car.brand}</td>
            <td>${car.model}</td>
            <td>${car.year}</td>
            <td>${car.scale}</td>
            <td>${car.category}</td>
            <td>${car.comment}</td>
        `;

        tableBody.appendChild(row);
    });
}

function search() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const filteredData = carData.filter(car => {
        return car.brand.toLowerCase().includes(input) || 
               car.model.toLowerCase().includes(input) || 
               car.year.toString().includes(input) || 
               car.category.toLowerCase().includes(input);
    });

    carData = filteredData;
    loadTable();
}

function filter() {
    const category = document.getElementById("filterCategory").value;
    const filteredData = carData.filter(car => {
        return category === "" || car.category === category;
    });

    carData = filteredData;
    loadTable();
}

document.addEventListener("DOMContentLoaded", loadTable);
