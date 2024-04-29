// Chiediamo all'utente su cosa puntare

decisioneUtente = prompt("Scegli pari o dispari");
numeroUtente = prompt("Scegli un numero da 1 a 5");

// Funzione numero casuale computer 

function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

let numeroComputer = getRandomNumber();
console.log("Il numero del computer è:", numeroComputer);

// Funzione per verificare se pari o dispari (con somma)

risultato = numeroUtente + numeroComputer;

function parioDispari( risultato ) {
    if (risultato % 2 === 0) {
        return "è pari"; 
    } else {
        return "è dispari"; 
    }
}

console.log(parioDispari(0) === "è pari"); 
console.log(parioDispari(1) === "è dispari"); 

if ((parioDispari(risultato) === "è pari" && decisioneUtente === "pari") || (parioDispari(risultato) === "è dispari" && decisioneUtente === "dispari")) {
    console.log("Hai vinto!");
} else {
    console.log("Hai perso!");
}   