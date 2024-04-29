function sePalindroma(parola) {
    let left = 0;
    let right = parola.length - 1;

    while (left < right) {
        if (parola[left] !== parola[right]) {
            return false; 
        }
        left++;  
        right--; 
    }

    return true; 
}