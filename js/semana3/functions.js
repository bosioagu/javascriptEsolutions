/* 
-Intentar que cuando iniciamos una variable con un determinado tipo, se mantenga, si nos e puede crear otra variable

-Asignar el valor de una funcion a una variable SIEMPRE es mejor que llamar varias veces a la funcion
*/
//---------- FUNCION CON PARAMETRO

function nameOfFunction(parameter) {
    console.log(typeof(parameter))
    //codigo que se ejecuta
}

nameOfFunction(23);

//---------- FUNCION CON VARIOS PARAMETROS


function sumParameters(parameter, x, y) {
    console.log(typeof(x + y))
    console.log(x + y)
    //codigo que se ejecuta
}

sumParameters("4", 5, 8);


//---------- ASIGNACION DE VALOR para usarlo afuera
function asignandoAVariable(parameter) {
    return parameter
    //codigo que se ejecuta
}

let resultado = asignandoAVariable("25")
console.log(resultado)


//---------DECLARANDO LA FUNCION COMO const
const sum = function (x, y) {
    console.log(x + y)
    return x + y;                  // si no retorno va a dar undefined 
}
console.log(sum(10, 5))            
//console.log(sum) // si pongo solo sum va a devolver como es la funcion

let result = sum(10, 5)
console.log(result)


//---------DECLARANDO LA FUNCION COMO ARROW FUNCTION
const multiply = (x, y) => {
     return x * y;                  // si no retorno va a dar undefined 
}

let multiplyResult = multiply(5,4);
console.log(multiplyResult)


//--------- Recorriendo con un map, con una ARROW FUNCTION adentro
const atom = ["Hidrógeno", "Helio", "Carbono", "Nitrogeno"]

let atom2 = atom.map(function(a) {return a.length}); //con funcion tradicional
console.log(atom2);

let atom3 = atom.map(a => a.length);            //si es una sola variable no hace falta el return
console.log(atom3);



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
Cada objeto tiene una propiedad interna llamada [[Prototpe]]
Da lo mismo crear un objeto de forma literal o con new Object
*/

//objeto de forma literal
const x = {};
//Object.getPrototypeOf(x)

// Objeto con new Object
const y = new Object();
//Object.getPrototypeOf(y)
