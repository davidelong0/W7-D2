// Recupero un riferimento stabile al campo textarea in modo da utilizzarlo in tutte le funzioni collegate ai bottoni
const textAreaInput = document.getElementById("content");

// prendere i riferimenti ai pulsanti e applicarci del comportamento
// PULSANTE SALVA
const saveButton = document.getElementById("save");
saveButton.addEventListener("click", function () {
  // 1) recuperare il contenuto della textarea
  const name = textAreaInput.value.trim();

  if (name !== "") {
    // 2) salvare il nome nel localStorage
    localStorage.setItem("userName", name);

    // 3) aggiorna la visualizzazione sopra l'input
    const savedNameValue = document.getElementById("saved-name-value");
    savedNameValue.textContent = name;

    // Mostra il blocco di nome salvato
    const nameDisplay = document.getElementById("name-display");
    nameDisplay.classList.remove("invisible");

    // 4) Mostrare l'alert di successo
    const successAlert = document.getElementById("success-alert");
    successAlert.classList.remove("alert-coming");
    successAlert.classList.remove("alert-going");
    successAlert.classList.add("invisible");

    successAlert.classList.remove("invisible");
    successAlert.classList.add("alert-coming");

    setTimeout(function () {
      successAlert.classList.add("alert-going");
    }, 3000); // 3s

    // Svuota la textarea dopo aver salvato
    textAreaInput.value = "";
  }
});

// PULSANTE CANCELLA
const cancelButton = document.getElementById("cancel");
cancelButton.addEventListener("click", function () {
  // svuotare la textarea
  textAreaInput.value = "";

  // cancellare la chiave "userName" dal localStorage
  localStorage.removeItem("userName");

  // Nascondere il nome salvato sopra l'input
  const nameDisplay = document.getElementById("name-display");
  nameDisplay.classList.add("invisible");

  // notificare l'utente del cancel
  const cancelAlert = document.getElementById("cancel-alert");

  // -----RESET PRECEDENTE ANIMAZIONE-----
  cancelAlert.classList.remove("alert-coming");
  cancelAlert.classList.remove("alert-going");
  cancelAlert.classList.add("invisible");
  // -----RESET PRECEDENTE ANIMAZIONE-----

  cancelAlert.classList.remove("invisible");
  cancelAlert.classList.add("alert-coming");

  setTimeout(function () {
    cancelAlert.classList.add("alert-going");
  }, 3000); // 3s
});

// PULSANTE RIMUOVI
const removeButton = document.getElementById("remove");
removeButton.addEventListener("click", function () {
  // 1) Rimuovere il nome dal localStorage
  localStorage.removeItem("userName");

  // 2) Nascondere il nome salvato sopra l'input
  const nameDisplay = document.getElementById("name-display");
  nameDisplay.classList.add("invisible");

  // 3) Mostrare l'alert di rimozione
  const removeAlert = document.getElementById("remove-alert");
  removeAlert.classList.remove("alert-coming");
  removeAlert.classList.remove("alert-going");
  removeAlert.classList.add("invisible");

  removeAlert.classList.remove("invisible");
  removeAlert.classList.add("alert-coming");

  setTimeout(function () {
    removeAlert.classList.add("alert-going");
  }, 3000); // 3s
});

// Recupera il nome salvato dal localStorage quando la pagina viene caricata
window.onload = function () {
  const savedName = localStorage.getItem("userName");

  // Se c'è un nome salvato, visualizzalo sopra l'input
  if (savedName) {
    document.getElementById("saved-name-value").textContent = savedName;
  } else {
    document.getElementById("saved-name-value").textContent =
      "Nessun nome salvato";
  }
};
