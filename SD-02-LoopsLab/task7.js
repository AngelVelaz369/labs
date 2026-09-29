let buzzWords = [
    "Fizz",
    "Buzz",
    "Woof",
    "Bark",
    "Awoo",
    "Bang"
];

function esPrimo(num) {
    if (num < 2) return false;
    for (let j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0) return false;
    }
    return true;
}

let contadorBuzzWord = 0;

for (let i = 1; i <= 50; i++) {
    if (esPrimo(i) && i > 2) {
        let palabraAsignada = buzzWords[contadorBuzzWord % buzzWords.length];
        console.log(`Número ${i} (Primo): ${palabraAsignada}`);
        contadorBuzzWord++;
    } else {
        console.log(i);
    }
}