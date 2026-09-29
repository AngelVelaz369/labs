let resultados = []; 
let limite = 105;  

for (let i = 1; i <= limite; i++) {
    let output = "";
    
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    if (i % 7 === 0) output += "Woof";
    
    resultados.push(output || i);
}

console.log("Secuencia guardada en el Array:");
console.log(resultados);
