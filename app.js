// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Dollar to yen
const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInYen = valueInDollar * 146.262;
    // Retornamos el valor en yen
    return valueInYen;
}

// Yen to Pound
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a dólares
    let valueInPound = valueInYen* 0.00556;
    // Retornamos el valor en pound
    return valueInPound;
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar,fromDollarToYen, fromYenToPound }