// VARIABLES
    // Una variable es un contendor que sirve para almacenar un valor que voy a poder usar mas adelante o modificar (redefinirlo)
    // Puede contener cualquier tipo de dato y no es necesario declarar que tipo es

    
var username = "hsimpson";
var week     = 7;
var animals  = ["perro", "gato", "mono"];
var nothing  = null;


if (username == "hsimpson") {
    console.log(true);
}
console.log(username)

username = "lsimpson"  // reasignacion del valor
console.log(username)

//-----------------------
//VIEJO JAVASCRIPT con VAR
var species = "humano"

function transform() {
    var species = "hombre-lobo";
    console.log(species)
}


console.log(species)
transform()
console.log(species)

//NUEVO JAVASCRIPT con LET
var fullMoon = true;
let species2 = "humano"

if (fullMoon) {
    let species2 = "hombre-lobo"
    console.log(`Hay Luna LLena. Ahora soy ${species2}`)
}

console.log(`No hay Luna Llena. Ahora soy ${species2}`)


//LET tiene alcance de bloque

let x = 10;

function hoist() {
    //si fuese var es como que definiera una variable al inicio de la funcion
    //var x; entonces daria undefined
    if (false) {
        let x = 200
    }
    console.log(x)
}

hoist()