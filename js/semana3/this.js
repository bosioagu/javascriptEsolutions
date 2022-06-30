//'use strict' // cuando pongo esto es que uso el modo estricto para evitar que this tenga un alcance inesperado

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Strict_mode

console.log("Clase 28/6");

// this es una referencia a un objeto

// Objeto global window

//console.log(this) // va a mostrar Window

function printThis() {
    console.log(this);
}

//printThis();
/*
const argentina = {
    name: "Argentina",
    independenceYear: 1816,
    details: {
        laguaje: "español",
        currency: "peso",
        printDetails() {
            console.log(`${this.name}El idioma es ${this.laguaje} y la moneda es ${this.currency}`);
//            console.log("Contexto details:" + this) 
        }
    },

    printDetails2() {
        console.log(`${this.name}El idioma es ${this.details.laguaje} y la moneda es ${this.details.currency}`) 
    },

    describe() {
        console.log(`${this.name} se independizó en ${this.independenceYear}`)
    }
}
*/


//argentina.describe();

//argentina.details.printDetails();

//argentina.printDetails2();

// CREANDO CON FUNCION

/*
function Country(name, independenceYear) {
    this.name  = name,
    this.independenceYear = independenceYear,
    this.
}
*/

// CREANDO CON CLASE

class Country {
    constructor(name, independenceYear) {
        this.name = name
        this.independenceYear = independenceYear
    }
    describe = function(){
        console.log(`${this.name} se independizó en ${this.independenceYear}`)
    }
}

const argentina = new Country ("Argentina", 1816)

//argentina.describe();

const button = document.createElement("button");
button.textContent = "Click  me";
document.body.append(button);
button.addEventListener('click',function(event) {
    console.log(this)
})


// CONTEXTO EXPLICITO

const book = {
    title: "El Aleph",
    author: "Jorge Luis Borges",
}

const book2 = {
    title: "Análisis Numérico para Ingeniero",
    author: "Chapra",
}

// en esta funcion va a buscar en el objeto global y va a dar undefined (busca en Window)
function summary() {
    console.log(`${this.title} fue escrito por ${this.author}`);
}

function addSummary(genre, year){
    console.log(`${this.title} fue escrito por ${this.author}. Es ${genre} en el año ${year}`)
}


// BIND
const alephSummary = summary.bind(book);
alephSummary(); // se comporta como la funcion summary con book


//CALL y APPLY
addSummary.call(book, "ficción literaria", 1949) // primero paso el la referencia del this (usando call)

addSummary.apply(book, ["ficción literaria", 1949]) // en apply los valores deben ir en un array

//usamos apply cuando los parametros vienen en  un ARRAY y CALL cuando no
summary()
summary.call(book); // en este caso digo de donde quiero EXPLICITAMENTE de donde quiero que tome los valores
summary.apply(book2); // en este caso funciona igual call o apply

printThis.call(book); 
printThis.apply(book); 


// ARROW FUNCTION

const whoAmI = {
    name: "Homero Simpson",

    regularFunction: function() {
        console.log(this.name);
    },

    arrowFunction: () => {
        console.log(this.name)
    }
}

whoAmI.regularFunction();
whoAmI.arrowFunction();   // con ARROW  function el this no toma el objeto, sino que toma global

class Display {
    constructor() {
        this.buttonText = "Texto Nuevo"

        button.addEventListener('click', event => {
            event.target.textContent = this.buttonText
        })
    }
}

new Display