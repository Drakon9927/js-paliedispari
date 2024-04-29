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


// Ottenere un numero casuale 

function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

// Funzione per verificare se pari o dispari

function parioDispari(number) {
    if (number % 2 === 0) {
        return true; 
    } else {
        return false; 
    }
}