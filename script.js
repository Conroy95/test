document.addEventListener("DOMContentLoaded", () => {
    const autoForm = document.getElementById("autoForm");
    const autoLijst = document.getElementById("autoLijst");

    let autos = JSON.parse(localStorage.getItem("autos")) || [];

    function updateAutoLijst() {
        autoLijst.innerHTML = "";
        autos.forEach((auto, index) => {
            let li = document.createElement("li");
            li.innerHTML = `${auto.merk} ${auto.model} (${auto.bouwjaar}) - ${auto.kenteken}  
                            <button onclick="verwijderAuto(${index})">❌</button>`;
            autoLijst.appendChild(li);
        });
    }

    autoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const merk = document.getElementById("merk").value;
        const model = document.getElementById("model").value;
        const bouwjaar = document.getElementById("bouwjaar").value;
        const kenteken = document.getElementById("kenteken").value;

        autos.push({ merk, model, bouwjaar, kenteken });
        localStorage.setItem("autos", JSON.stringify(autos));

        updateAutoLijst();
        autoForm.reset();
    });

    window.verwijderAuto = (index) => {
        autos.splice(index, 1);
        localStorage.setItem("autos", JSON.stringify(autos));
        updateAutoLijst();
    };

    updateAutoLijst();
});