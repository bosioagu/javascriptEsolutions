console.log("clase 28/06");

// usamos OBJECT para almacenar pares de CLAVE: VALOR

/*
En un MAP sabiendo el valor de la clave, puedo cambiar el valor

E un MAP puedo interat, en objeto no, en MAP puedo tener cualquier tipo de dato como key, en objeto solo string

No usaria MAP para trabajar con JSON, trabajaria con OBJETO
*/

// MAP -- Se utiliza mucho para compartir mapa en una vista
// Una forma de iniciar un map
const map = new Map();
console.log(map)
map.set("name", "Luke")
map.set("planet", "Tatooine")

// Otra forma de iniciar un map
const map2 = new Map([
    ["name", "Luke"],
    ["planet", "Tatooine"],
])

console.log(map)
console.log(map2)
console.log(map.get("name"))

// MAP to ARRAY
const obj = Object.fromEntries(map) //generamos un OBJETO desde un Map
console.log(obj)

// MAP to OBJECT
const arr = Array.from(map)         //generamos un ARRAY desde un Map
console.log(arr)


// Creamos un Objeto
const luke = {
    firstName: "Luke",
    lastName: "Skywalker",
    planet: "Tatooine",
}

console.log( Object.entries(luke))  // da un array de arrays


const map3 = new Map();

map3.set("1", "Esto es un string")
map3.set(1, "Esto lo puedo sobrescribir")
map3.set(1, "Esto es numerico")
map3.set(true, "Esto es un boolean")

console.log(map3) // no hace coersion de tipo, tomo diferente "1" con 1. Mientras que sobreescribio el del mismo dato
// toma todo como STRING, "1" es un 1 con comillas y el otro es un string 1, ninguno es un number

const obj1 = {obj: "obj"};

const obj2 = {
    [obj1]: "Que pasa acá?"
}

console.log(obj1)
console.log(obj2)

// Pero en el caso de un map

const map4 = new Map();
map4.set(obj1, "Que pasa acá?")
console.log(map4) // la key del elemento mapa es un objeto

map4.set(obj1, "¿Y este otro?")
map4.set({}, "Uno mas");
map4.set({}, "otro")

console.log(map4)
/* obj1 si es el mismo que obj1 porque hacemos referencia a ese, mientras qwue en los vacios, son dos objetos vacios distintos
*/

// NO SE RECOMIENDA TRAAJAR CON OBNJETOS VACIOS

console.log(map4.has(obj1)) //true
console.log(map4.has({}))   //con vacio da False pero hay dos

//map4.delete(obj1) //eliminamos obj1

//map4.clear()  // borra todo

// Los siguientes los puedo recorrer con un For of y buscar el valor y obtener la clave, esa clave guardarla y despues borrar por esa clave
console.log( map4.values())
console.log( map4.keys())
console.log( map4.entries())


// ITERAMOS con ForEach Itera por valor, por key y por mapa
map4.forEach((value, key) => {
    console.log(`${key}: ${value}`)
})

//  for of con DESESTRUCTURACION
for (const [key, value] of map4) {
    console.log(`${key}: ${value}`)    
}


// DETALLES DE SET --> no deja se dupliquen datos!!!

const set1 = new Set();

set1.add("Rojo")
set1.add("Amarillo")
set1.add("Verde")
set1.add("Rojo") // No lo agrega, o reemplaza "entonces no se duplican datos"
set1.add("ROJO")

console.log(set1)

set1.forEach( value => console.log(value))

for (const value of set1) {
    console.log(value)
}

const array1 = [...set1] // SPREAD OPERATOR Lo transforma a array

console.log(array1)

const uniqueArray = [...new Set(                
    ["auto", "casa", "barco", "casa", "barco"]
)]

console.log(uniqueArray)