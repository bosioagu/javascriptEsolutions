/**
 * Autor: Bosio Agustin
 * Version: 0.0.1
 * email: bosio.agustinariel@gmail.com
 * Descripcion: descripcion general de lo que hace el codigo
 * Posibles advertencias o recomendaciones
 */


//REGLAS DE LEGIBILIDAD (segun el estandar mas usado en todos los lenguajes de programacion)


/*
     - Dejar espacios correctamente
     - Es buena practica poner el punto y coma ; 
     - Siempre hay que premiar la legibilidad 
     - Espacios antes y despues en el uso de parentesis en palabras claves
     - COMENTARIOS pegados al bloque que va a comentar, no dejar espacio debajo del comentario
     - Agregar espacios entre bloques -> NO es bueno tener todas las lineas pegadas, para entender facilmente el codigo en el equipo
        Cuando son palabras claves el parentesis va despegado (switch, else, for, if ....)
     - Los parentesis se pegan en funciones, metodos o clases 
        Cuando son nombres van pegados
     -Variables camelCase   Clases Nombre (UpperCamelCase)
     -Si una constante va a ser global, es costumbre escribira toda en mayuscula ( 
        const IVA = 0.21  
        const PI_NUMBER = 3.14;) // si es compuesta uso el _ para separar
     - Ser descriptivo al nombrar variables, funciones.... NO SE PUEDE USAR PALABRAS RESERVADAS

*/



// ESPACIOS EN LA SINTAXIS
//const saludo="Hola"; // NO, salvo que todo el codigo este escrito de esta forma

const saludo = "Hola"; // SI, dar espacios correctamente

let x = 5 * y; // SI
//let x=5*y;   // NO

for (let i = 0; i < 5; i++) {  // el punto y coma pegado

}


// ES BUENA PRACTICA EL USO DE ;
    //no se agrega punto y coma al final de algo contenido en llaves

// ES BUENA PRACTICA PONER COMA AL ULTIMO ELEMENTO Y EN CASO D ELOS OBJETOS PONER ; despues de las llaves
    const objectName = {};

    const otherObject = {
        type: "type",
        a: "a",
        counter: 3,
        other: "other",
    };


// PREMIAR LEGIBILIDAD (en algunos casos esto es mejor para que sea mas claro leerlo) siempre que la asignacion de estas variables esten juntas
const companyName     = "ESolutions";
const companyLocation = "Córdoba";
const company         = "esolutions";


// USO DE PARENTESIS EN PALABRAS CLAVES deben tener un espacio antes (al igual que despues) en condicionales
if (4 < 5) {
    console.log("4 es menor que 5");
} else {
    console.log("4 es mayor que 5");
}

// COMENTARIOS pegados al bloque que va a comentar, no dejar espacio debajo del comentario

// AGREGAR ESPACIOS ENTRE BLOQUES
const m = 5;
if (4 < m) {
    console.log("4 es menor " + m);
} else {
    console.log("4 es mayor " + m);
}
                                       //Este espacio es bueno dejar entre bloques 
const s = 6;
if (4 < s) {
    console.log("4 es menor " + s);
} else {
    console.log("4 es mayor " + s);
}


//LOS PARENTESIS SE PEGAN EN FUNCIONES, METODOS, CLASES
function functionName() {

}

function square(number) {           //number es el parametro
    return Math.pow(number, 2);
}

square(5);                          // 5 ya es el argumento que le pasamos (el valor)
console.log(square(5));


