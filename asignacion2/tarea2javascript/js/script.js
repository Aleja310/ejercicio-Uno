
let num1 = 5;
let num2 = 7;

function suma(num1, num2) {
    return num1 + num2;
}

function resta(num1, num2) {
    return num1 - num2;
}

function multiplicacion(num1, num2) {
    return num1* num2 ;
}

function division(num1, num2) {
    
    return num1 / num2;
}


const resultadoSuma = suma(num1, num2);
const resultadoResta = resta(num1, num2);
const resultadoMultiplicacion = multiplicacion(num1, num2);
const resultadoDivision = division(num1, num2);


console.log(`Suma: ${resultadoSuma}`);
console.log(`Resta: ${resultadoResta}`);
console.log(`Multiplicación: ${resultadoMultiplicacion}`);
console.log(`División: ${resultadoDivision}`);