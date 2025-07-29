async function loadDag() {
  const params = new URLSearchParams(window.location.search);
  const dagNummer = parseInt(params.get("dag")) || 1;
  localStorage.setItem("dag", dagNummer);

  const response = await fetch("routes.json");
  const dagen = await response.json();
  const dag = dagen.find(d => d.dag === dagNummer);

  const container = document.getElementById("dag-content");
  if (!dag) {
    container.innerHTML = "<h2>Dag niet gevonden.</h2>";
    return;
  }

  container.innerHTML = `
    <h1>Dag ${dag.dag} - ${dag.stad} - ${dag.datum}</h1>
    <img src="img/${dag.img}" alt="${dag.stad}" style="max-width:100%;" />
    <section>
      <h2>Programma</h2>
      <p>Programma info per dag hier invoegen.</p>
    </section>
    <section>
      <h2>Locaties</h2>
      <ul>
        <li>Voorbeeldlocatie 1 (coördinaten)</li>
        <li>Voorbeeldlocatie 2 (coördinaten)</li>
      </ul>
    </section>
  `;
}

loadDag();
