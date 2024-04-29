// Chiedo all'utente una parola

let parolaUtente = prompt("Inserisci una parola");
console.log(parolaUtente);

// Funzione:

function sePalindroma(parolaUtente) {
    let left = 0;
    let right = parolaUtente.length - 1;

    while (left < right) {
        if (parolaUtente[left] !== parolaUtente[right]) {
            return false; 
        }
        left++;  
        right--; 
    }
    return true; 
}

let risultato = sePalindroma(parolaUtente);
console.log(risultato ? "La parola è palindroma." : "La parola non è palindroma.");