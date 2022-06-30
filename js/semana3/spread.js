console.log("SPREAD")

// SINTAXIS EXTENDIDA o SPREAD -> (...)

// CON ARRAYS - simplifica

const arr1 = [ "rojo", "amarillo", "azul", ];

const arr2 = [ "naranja", "violeta", "verde", ];


// normalmente usariamos "concat"
const colors = arr1.concat(arr2);
console.log(colors)

//con SPREAD
const colors2 = [...arr1,...arr2];
console.log(colors2)

const users = [
    {id: 1, name: "Homero",},
    {id: 2, name: "Bart",},
]

const newUser = { 
    id: 3, 
    name: "Lisa",
    location: {
        lat: 45.4564,
        long: 35.45646,
    }};

//users.push(newUser); esto modificaria el array original

const updatedUsers = [...users, newUser];
console.log(updatedUsers)

//-----
 // poniendo el spread no voy a cambiar el array original al que aplico la funcion
function popArr([ ...arr ]) {  
    arr.pop();
    console.log(arr);
}



// SPREAN EN OBJETO

//sin operador
//const lisa = Object.assign({}, newUser);

//con SPREAD
const lisa = { ...newUser }
console.log(lisa)

 // poniendo el spread no voy a cambiar el objeto original (lisa) al que aplico la funcion
function addProp( { ...obj } ) {
    obj.newProp = "hola";
    console.log(obj);
}

console.log(addProp(lisa))
console.log(lisa)

//se pueden agregar mas propiedades  // detalle ...newUser.location
const lisa2 = { ...newUser, location: { ...newUser.location, name: "Springfield",}, isActive: true}
console.log(lisa2)


// PARAMETROS REST  -> hacen lo mismo que spread, pero de efecto contrario
// NO desempaqueta, sino que REST va a crear una matriz de numero indefinido de 

function restTest( ...args) {
    console.log(args);
}

const a = true
 restTest(1, "hola", 3, 4, true) // devuelve un array con esos elementos




 const note = { 
    id: 2,
    title: "Mi nota",
    date: "01/01/2022",
    author: {
        firstName: "Homero",
        lastName: "Simpson",
    }
}



 const { id, ...rest } = note;

 console.log(id);
 console.log(rest); // aca guardo el resto
