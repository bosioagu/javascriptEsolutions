// BUCLES: cuando nos interesa que algunas partes del codigo se ejecuten varias veces.

// WHILE: mientras se cumpla una condicion se ejecutara el codigo que indicamos entre llaves.
function bucleWhile(num) {
    let i = 0;
    while(i < num) {
        console.log(i);
        i++;
    }

}

bucleWhile(11) // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10


// DO WHILE: hace una primera ejecucion dentro del DO y luego hace el WHILE

function doWhile(num) {
    let i = 0;
    do {
        console.log(i);
        i++
    } while (i < num)
}

doWhile (11)


/* FOR muy comun para recorrer arrays

for(inicializacion; condicion; actualizacion) {
    codigo que queremos ejecutar
}
*/
let arrayNumbres = [10, 20, 30, 40, 50, 60, 70];

for( i=0; i<arrayNumbres.length; i++){
    console.log(arrayNumbres[i])
}



function bucleFor(num) {
    for(let i=0; i<num; i++){
        console.log(i);
    }
}

bucleFor(11);

  //ejemplo con array

const obj = {
    unArray: new Array (10000)
}

function recorrerArray() {
    for (let i=0; i<obj.unArray.length; i++) {
        obj.unArray[i] = "Hola";
    }
}


// forEach una funcion especial para array
const miArray = [1, 2, 3, 4];

miArray.forEach(datos => {
    console.log(datos)
});


miArray.forEach(function(datos, index){
    console.log(`El valor de la posicion ${index}  es ${datos}`)
})

 //lo mismo con arrow function
miArray.forEach((datos, index) =>{
    console.log(`El valor de la posicion ${index}  es ${datos}`)
})

// ejemplo para recorrer objetos
const libro = {
    titulo: "Aprendiendo Javascript",
    autor: "Agustin Bosio",
    numPaginas: 150,
    editorial: "cordoba ed",
    precio: "2500.50",
}

const props = Object.getOwnPropertyNames(libro); //esto nos va a devolver un array para poder recorrer con forEach ya que forEach es solo para array y no para objetos
console.log(props)
props.forEach(name => {
    let valor = Object.getOwnPropertyDescriptor(libro, name).value
console.log(valor)
    console.log(`La prop ${name} contiene: ${valor}`)
})


// map

const dias = [
    {nro:1, dia:"Lunes"},
    {nro:2, dia:"Martes"},
    {nro:3, dia:"Miercoles"},
    {nro:4, dia:"Jueves"},
    {nro:5, dia:"Viernes"},
]

dias.map(function(dias){
    console.log(`El dia ${dias.nro} es ${dias.dia}`)
})


// FOR IN
/* 
for (key in object) {

}
*/

for (let prop in libro) {
    console.log(`La prop %{prop} contiene ${libro[prop]}`)
}


// switch

const adversario = "Hulk";
let loki = ""

switch (adversario) {
    case "Iron Man":
        loki = "Magneto"
        break;

    case "Hulk":
        loki = "Thanos"
        break;

    case "Thor":
        loki = "Odin"
        break;

    default:
        loki = "loki"
        
}

console.log(loki) //Thanos

