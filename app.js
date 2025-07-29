if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(() => {
    console.log("Service Worker geregistreerd");
  });
}

function navigateTo(direction) {
  const current = parseInt(localStorage.getItem("dag") || "1");
  const next = direction === "next" ? current + 1 : current - 1;
  if (next >= 1 && next <= 20) {
    localStorage.setItem("dag", next);
    window.location.href = `dag.html?dag=${next}`;
  }
}
