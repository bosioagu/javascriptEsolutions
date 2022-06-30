console.log("DESESTRUCTURACION 29-06-2022")

// lo que hacen es darnos formas mas directas de acceder a los miembros de un ARRAY u OBJETO
// para manipular datos

//---------- DESESTRUCTURACIÓN de OBJETOS ------------

const note = { 
    id: 2,
    title: "Mi nota",
    date: "01/01/2022",
    author: {
        firstName: "Homero",
        lastName: "Simpson",
    }/*  */
}

// forma SIN desestructuración
//const id = note.id;
//const title = note.title;
//const date = note.date,

// forma CON desestructuracón - se hace en una sola linea y crea las variables individuales
const {id: idNote, title, date, author: {firstName, lastName}, author} = note  
//se puede poner desordenado { title, date, id }, pero NO cambiar los nombres
//Poniendo asi id: idNote , reenombramos nuestra variable
//console.log(id)
console.log(idNote)  // este es id que reasigne el nombre
console.log(title)
console.log(date)
console.log(firstName) // solo van a ser variables en una desestructuracion
console.log(lastName)
console.log(author)  // si desestructuramos el ultimo author, nos muestra un objeto

// Esto desestructura utilizando PROPIEDADES DEL OBJETO   el dato, en este caso 10 queda guardado en lenght
const { length } = "Una cadena"  


//------------------------------------------------------------------------
//---------- DESESTRUCTURACIÓN de ARRAYS ----------

const numbers = [ 25, 30, 12]

// forma SIN desestructuración
//const first = numbers[0];
//const second = numbers[1];
//const third = numbers[2];

// en este caso, el ORDEN IMPORTA
const [ primero, segundo, tercero, ] = numbers;  

const [ ,,third_element] = numbers // elijo el tercero solamente, poniendo comas


const nestedNumbers = [ 1, 2, [3, 4,], 5,];

const [ uno, dos, [ tres, cuatro], cinco ] = nestedNumbers
//const [ uno, dos, [ tres, cuatro], cinco ] = nestedNumbers --> nro devolveria un array
console.log(tres)

// desustructurar los parametros con una FUNCION
console.log(" ")
console.log(" ")
console.log("--- desustructurar los parametros con una FUNCION---")

Object.entries(note).forEach( ([k, v]) => {
    console.log(`${k}: ${v}`);

})

console.log(" ")
console.log(" ")
console.log("--- hacemos bucle y desestructuramos adentro---")
for (let [key, value] of Object.entries(note)) {
    console.log(`${key}: ${value}`);
}


// DESUSTRUCTURACION COMBINADA
//revisar el codigo del profe no tengo los fTag

console.log(" ")
console.log(" ")
const {
    id: id1,
    title: title1,
    date: date1,
    author : {
        firstName: firstName1,
        lastName: lastName1,
    },
    /*tags:[fTag, sTag, tTag],*/
} = note; 

console.log(id1, title1, date1, firstName1, lastName1/*, fTag, sTag, tTag*/)