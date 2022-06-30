console.log("clase 28/06 - generators")

// es un proceso en el que puedo poner pausa, luego prender de nuevo y sigue produciendo cosas

// Formas de definir
// 1
function* generatorFunction() {

}

// 2
const generatorFunction2 = function* () {

}


// 3 como Objeto
const generatorObject = {
    *generatorMethod() {

    },
}

// 4 como Clase
class GeneratorClass {
    constructor() {
        
    }

    *generatorMethod() {

    }
} 

//----------------------------------------------------//


// Ver los objetos que devuelve --> Son objetos iterables

// funcion tradicional
function sum (a, b) {
    return a + b;
}

const suma = sum(5, 6)


// funcion generadora
function* greetFunction() {
    return "Hola Mundo Generador";
}

let generator = greetFunction(); // devuelve "suspend"

//generator.next();
// cuando la funcion se agotó -->  generator = "closed"

// OPERADOR yield

function* colorGenerator() {
    yield "Rojo"
    yield "Azul"
    yield "Amarillo"
    return "Blanco"
}

generator = colorGenerator();

//Puedo iterar un generator con for of
/*
for (const value of generator) {   // no va a devolver el return
    console.log(value)

}
*/

// Creamos el generator y ahora lo ponemos en un array --
/*
const valuesGenerator = [...generator]
console.log(valuesGenerator)
*/



// 2 FORMAS de CANCELAR GENERATOR 
// RETURN  puedo cancelar el generator en cualquier punto


// THROW

function* numberGenerator() {
    try{
        yield 1
        yield 2
        yield 3
    } catch (error){
    console.log(error)
    }
}

generator = numberGenerator();

/*
generator.throw(new Error("Aparece uno, en lugar de 1"))
*/


// llamar a otra funcion con yield*
function* delegate() {
    yield 4
    yield 5
}

function* main() {
    yield 1
    yield 2
    yield 3
    yield* delegate()
}

generator = main()

//---

//Funcion generator infinita
function* increment() {
    let i = 0;
    while(true) {
        yield i++
    }
}

generator = increment()

// Pasar VALORES a los GENERADORES

// en este caso yield va a detener -- PROBARLO
function* consoleGenerator() { 
    console.log(yield)
    console.log(yield)
    return "Fin"
}

generator = consoleGenerator();


//------------
function* valueGenerator(value) {
    while(true) {
        value = yield value * 10
    }
}

generator = valueGenerator(0)

for (let i = 0; i < 5; i++) {
    console.log(generator.next(i).value)
}

