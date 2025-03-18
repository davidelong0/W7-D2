// Recupera il valore salvato in sessionStorage, se esiste
let startTime = parseInt(sessionStorage.getItem("startTime")) || Date.now();
let timer;

// Funzione per aggiornare il tempo visualizzato
function updateTime() {
  const currentTime = Date.now();
  const elapsedTime = Math.floor((currentTime - startTime) / 1000); // Tempo trascorso in secondi

  // Mostra il tempo formato hh:mm:ss
  const hours = String(Math.floor(elapsedTime / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((elapsedTime % 3600) / 60)).padStart(
    2,
    "0"
  );
  const seconds = String(elapsedTime % 60).padStart(2, "0");

  document.getElementById(
    "time-display"
  ).textContent = `${hours}:${minutes}:${seconds}`;
}

// Salva l'orario di inizio nel sessionStorage e aggiorna ogni secondo
function startTimer() {
  sessionStorage.setItem("startTime", startTime);
  timer = setInterval(updateTime, 1000); // Aggiorna ogni secondo
}

// Avvia il contatore quando la pagina è pronta
startTimer();
