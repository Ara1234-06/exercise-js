/* Scrivi una funzione che accetta un parametro,
 verifichiamo se il parametro è una stringa e se è lunga almeno 5 caratteri,
  se sono vere entrambe le condizioni stampiamo in console la stringa "Successo",
   altrimenti stampiano la stringa "Errore" */

function checkString(x) {
  if (x.length >= 5 && typeof x === "string") {
    console.log(" Sucesso");
  } else {
    console.log("Errore");
  }
}
checkString("melone");
