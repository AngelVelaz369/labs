const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuántas líneas de FizzBuzz deseas generar? ', (respuesta) => {
    const limite = parseInt(respuesta);

    if (isNaN(limite) || limite <= 0) {
        console.log('Por favor, ingresa un número válido mayor a 0.');
    } else {
        console.log(`\nGenerando secuencia hasta el número ${limite}:`);
        
        for (let i = 1; i <= limite; i++) {
            let output = "";
            if (i % 3 === 0) output += "Fizz";
            if (i % 5 === 0) output += "Buzz";
            if (i % 7 === 0) output += "Woof";
            
            console.log(output || i);
        }
    }
    rl.close();
});