/* todos los objetos javascript tienen prototype Object.getPrototypeOf(x)


//--------- USO del THIS dentro de un Objeto usando ARROW FUNCTION
/*
function Person() {
    this.age = 0;

    setInterval(function growUp() { //al ser una funcion tradicional el this es d esta funcion y no de Person, por lo que no funciona
        this.age++
    }, 1000)          //lo que ponga antes de la coma se va a ejecutarcada 1000 milisegundos
}

const p = new Person();
console.log(p)
*/

function Person() {
    this.age = 0;

    setInterval(() => { //al ser una funcion flecha, el this hace referencia al objeto Person
        this.age++
    }, 1000)          //lo que ponga antes de la coma se va a ejecutarcada 1000 milisegundos
}

const p = new Person();
console.log(p)



/*
Cada objeto tiene una propiedad interna llamada [[Prototype]]

Object.getPrototypeOf(x)
Da lo mismo crear un objeto de forma literal o con new Object
*/

//objeto de forma literal
const x = {};


// Objeto con new Object
const y = new Object();

x.toString(); //toString es un metodo que hereda de Object

const z = []
  
console.log(z.__proto__ === Array.prototype   )       
console.log(z.__proto__.__proto__ === Object.prototype)
// a traves dell prototipo del objeto puedo ver la cadena de herencia ¿¿¿REVEEER???

// instanceof estoy preguntando si ese tipo de propiedad aparece en ese objeto

console.log(z instanceof  Array)
console.log(z instanceof  Object)


