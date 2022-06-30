// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array


const ocean1 = "Pacific";
const ocean2 = "Atlantic";
const ocean3 = "Indian";
const ocean4 = "Arctic";
const ocean5 = "Antartic";


let oceans = [
    "Pacific",
    "Atlantic",
    "Indian",
    "Arctic",
    "Antartic",
]


//Usando el literal de matriz []  Es la forma mas usada
let sharksL = [
    "Blanco",
    "Toro",
    "Martillo",
    "Tigre",
];

//Usando new Array() ("usando constructor") En general no se usa
let sharksO = new Array(
    "Blanco",
    "Toro",
    "Martillo",
    "Tigre",
);


// Inicializacion de un arreglo de datos mezclados
let mixedData = [
    "String",
    null,
    7,
    [
    "another", 
    "array"
    ],
];

let seaCreatures = [
    "pulpo",
    "cangrejo",
    "calamar",
    "tiburon",
    "caballo de mar",
    "estrella de mar",
]

console.log( seaCreatures.length)                   // cantidad de elementos del array
console.log( seaCreatures[seaCreatures.length -1])  // accedo al ultimo elemento del array
console.log(seaCreatures.indexOf("calamar"))        //da la posicion de ese elemento
console.log(seaCreatures.indexOf("ballena"))        //no da error, sino una posicion que no existe en un array da => -1 tener en cuenta para comprobar

// matriz bidireccional
let nestedArray = [
    [
        "salmon",
        "arenque",
        "pez espada",
    ],
    [
        "cangrejo",
        "langosta",
    ]
]

console.log(nestedArray[0][2]) // "pez espada"
seaCreatures[5] = "ballena"         //indico en que indice agregar

console.log(seaCreatures);

seaCreatures.push ("pez espada");                       //agrego al final del array

console.log("agrego pez espada " + seaCreatures)

//agrego al principio del array
seaCreatures.unshift("tortuga marina")
console.log("agrego tortuga marina " + seaCreatures)    

//SPLICE
//Elimino un elemento   5 es el desde que posicion, 1 es cuantos elementos -ESTO MODIFICA EL ARRAY ORIGINAL
seaCreatures.splice(5,1);
console.log("elimine 1 elemento desde el indice 5 " + seaCreatures); 

//SLICE
let firstArray = seaCreatures.slice (0, 7);
let secondArray = seaCreatures.slice (7);

console.log("fisrt Array" + firstArray);
console.log(secondArray);

//POP 
//elimino ultimo elemento 
seaCreatures.pop()
console.log("elimino el ultimo elemento" + seaCreatures )

//SHIFT
//elimino primer elemento
seaCreatures.shift()

//
//eliminar un elemento que no se el indice
seaCreatures.splice(seaCreatures.indexOf("caballo de mar"), 1)

seaCreatures.splice(seaCreatures.indexOf("calamar"),
seaCreatures.indexOf("caballo de mar") - seaCreatures.indexOf("calamar") + 1);
console.log("ELIJO DESDE QUE ELEMENTO HASTA QUE ELEMENTO MOSTRAR " + seaCreatures)

seaCreatures[0] = "manati"
console.log("AGREGO EN UNA POSICION " + seaCreatures)

//cambiar elementos por otro elemento
seaCreatures.splice(3, 2, "foca") 

//poner un elemento entre otros elementos sin borrar ninguno
seaCreatures.splice(3, 0, "leon marino", "orca", "pinguino")
console.log("AGREGO ELEMENTOS SIN BORRAR OTROS " + seaCreatures)



//FOR y FOR OFF
let shellfish = [
    "ostra",
    "camaron",
    "almeja",
    "mejillon",
]

//for si me muestra el indice
for(let i= 0; i < shellfish.length; i++) {
    console.log(i, shellfish[i]);
    
}
let mammals = [
    "delfin",
    "ballena",
    "manatí",
]

// for of no me muestra los indices
for (let mammal of mammals) {
    console.log(mammal)
}



//EXISTEN METODOS ACCESORES (accedo al array y guarod algun valor, sin modificar el anterior) Y MUTADORES ( modifico el array original)

let fish = ["piraña", "barracuda", "koi", "anguila" ];

//para saber si es un array
console.log( Array.isArray(fish));

//SORT ordenar
fish.sort()
console.log(fish.sort())

let numbers = [42, 34, 12, 4, 7, 23 ]
numbers.sort()
console.log(numbers.sort()) // ordena pero no como queremos

function sortNumerically (a,b) {
    return a - b;
}

//Ordenar numeros
let orderNumbers = numbers.sort(sortNumerically)
console.log(orderNumbers)

//METODODS MUTADORES
/* 
POP
SHIFT
PUSH   -puedo agregar uno o muchos elementos-
UNSHIFT
SPLICE
REVERSE - devuelve el array con los elementos devueltos al reves-
FILL - reemplaza los elementos del array con un elemento estatico - o desde donde y hasta le digamos
*/


//METODOS ACCESORES
//CONCAT
fish.concat(seaCreatures ) //no modifica el original, si puedo crear un nuevo array

//JOIN 
//devuelve todo en una solo STRING
fish.join()
console.log(fish.join())
//diciendo con que separador
fish.join(" - ")
console.log(fish.join(" - "))





// ------ FUNCIONES ------
//FUNCION TRADICIONAL
var example = function() {
    // escribimos el codigo que se ejecuta
}

example()

//ARROW FUNCTION lo mismo de arriba pero con arrow function
var example = () => {
    //escribimos el codigo que se ejecuta
}

example()

//en caso que la arrow function tenga un solo parametro, podemos escribirlo asi
var example = parameter => {
     //escribimos el codigo que se ejecuta   
}

example()

//METODOS DE ITERACION
//
//FOR EACH - espera una funcion flecha  RECORRE TODO EL ARRAY // fue especialmente diseñado para recorrer una array
fish.forEach(individualFish => {
     console.log(individualFish)
})

// es lo mismo que con un for
for (let i = 0; i < fish.length; i++) {
    console.log(fish[i])
}

//MAP crea un nuevo array
let printPluralsFish = fish.map(allFish => {
    return `${allFish}s`;      //detalle, lo convertimos en plural
    
})

console.log(printPluralsFish)

//FILTER  crea una nueva matriz si el elemento pasa un detemrinado filtro
//devuelve los elementos que empiecen con "c"
let filteredList = seaCreatures.filter(creature => {
    return creature[0] === "c"
})
console.log(filteredList)

//REDUCE reduce la matriz a un valor unico  --> puede ser numero, matriz, string....
//para encontrar la suma de todos los numeros de una matriz

let numbersToReduce = [42, 34, 15, 45, 55]

let sum = numbers.reduce((a, b) => {
    return a + b;
});

console.log(sum)


//FIND devuelve el PRIMERvalor que pase una cierta prueba
let findFish = seaCreatures.find(uniqueFish => {
    return uniqueFish[0] === "c"
})

console.log(findFish)

//otro ejemplo
const isCephalod = cephalod => {
    return ["calamar", "pulpo"].includes(cephalod)

}
console.log( seaCreatures.find(isCephalod))// si no hay resultado devuelve undefined


//FINDINDEX devuelve el primer indice que pase una determinada prueba
console.log( seaCreatures.findIndex(isCephalod))// si no hay resultado devuelve -1
