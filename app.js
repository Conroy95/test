document.getElementById("itemForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Haal de inputgegevens op
    const category = document.getElementById("category").value;
    const name = document.getElementById("name").value;
    const year = document.getElementById("year").value;

    // Maak een nieuw lijstitem
    const listItem = document.createElement("li");
    listItem.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)}: ${name} (${year})`;

    // Voeg het item toe aan de lijst
    document.getElementById("collectionList").appendChild(listItem);

    // Leeg het formulier
    document.getElementById("itemForm").reset();
});
