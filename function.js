// Capire se una parola è palindroma o no

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

