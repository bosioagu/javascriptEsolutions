//Objetos

const person = {
    name: "Homero",
    location: "Springfield",
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? "esta disponible" : "no esta disponible"
        console.log(`${this.name}  ${accepting} en ${this.location}`)
    }
}

const bart = Object.create(person) 
bart.name = "Bart"
console.log(bart)
console.log(bart.showDetails())

const keys = Object.keys(person) // devuelve las claves en un array entonces puedo usar metodos de array
console.log(keys)

console.log("------------")
// Valores de las key con el contenido
Object.keys(person).forEach( key => {
    let value = person[key];
    console.log(`${key}: ${value}`);
})
console.log("------------")


const values = Object.values(person)

console.log(values)  // devuelve los valores en un arreglo


console.log("------------")


//EFICIENCIA
// si hago esto por cada iteracion uso el metodo key lo que va a llevar a USAR MUCHO RECURSO
for (let i = 0; i<keys.length; i++) {
    console.log(i)
}

// HACERLO DE ESTA FORMA
const len = keys.length

for (let j = 0; j < len; j++) {
console.log(j)
}

console.log("------------")

// METODO ENTRIES   - DEVOLVER ARRAY CLAVE VALOR
const entries = Object.entries(person);
console.log(entries)

console.log("------------")

//METODO ASSIGN    -
const job = {
    company: "Planta Nuclear de Springfield",
    boss: "Montgomery Burns"
}

const fusion = Object.assign(person, job)
console.log(fusion)


// Puedo el valor cambiar de un elemento internopor mas que es una constante. 
person.name = "Marge";
console.log(person)

// METODO FREEZE    -- No deja modificar el valor de los elementos ni agregar atributos
const newPerson = Object.freeze(person)
person.name = "Lisa"
console.log(person)
console.log(Object.isFrozen(newPerson))

/* 
Podemos preguntar si esta freezado con 
Object.isFrozen(newPerson)
person tambien se va a freezar porque en realidad asigno a newPerson  un objeto frezado que es person
*/

//METODO SEAL   -- No puedo AGREGAR atributos, pero puedo modificar existentes

