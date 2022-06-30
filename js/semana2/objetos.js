// Un OBJETO en JS es un tipo de datos, que esta estructurado como keys - valor (puede incluir cadenas, numero, metodos...) 
//dos formas de construir un objeto

//es buena practica definir como const un objeto, lo que No significa que pueda alterar los objetos

//de Forma literal, con llaves { }
//usando constructor new


const literalObject = {};
const constructorObject = new Object();


// Inicializacion del objeto gimli

const gimli = {
    name: "Gimli",
    race: "enano",
    weapon: "hacha",
    greet: function() {
        return `Hola, mi nombre es ${this.name}` 
    }
}

//this, es porque el valor se va a sacar de una keys de ESTE objeto

console.log(gimli.greet());
console.log(gimli.name)
console.log(gimli["name"])  //este se prefiere porque no genera problemas con caracteres o espacios


//agregar a la clase // se puede hacer de las dos formas
gimli.age = 155;
gimli["nationality"] = "Ireland"

gimli.fight = function() {
    return `Gimli pelea con un ${this.weapon}`
}

console.log(gimli.fight())
console.log(gimli)

//eliminar algun dato
delete gimli.age;
console.log(gimli)


//recorrer el OBJETO con un FOR IN  -->En un objeto no se puede recorrer con FOR OF <--
for (let key in gimli) {
    console.log(gimli[key])
}

for (let key in gimli) {
    console.log(key.toUpperCase() + ": " + gimli[key])
}

// traer las claves de un objeto y meterlo en un array
let newKeyArray = Object.keys(gimli)
console.log(newKeyArray)

// ------------- DATE --------------------
const now = new Date();
console.log(now)

console.log( now.getTime());

console.log( new Date(455465464));
console.log(new Date( "Jul 9 1816 12:00"));
console.log(new Date( 1816, 2, 23, 15, 10, 5, 15));

console.log( now.getFullYear())
console.log( now.getMonth())            //la posicion empieza con ENERO en 0
console.log(now.getDay())            //dia Domingo es 0 
console.log(now.getDate())           //Numero del dia en el mes
console.log(now.getMilliseconds())  


const birthday = new Date (1988, 2, 4);
console.log(birthday);

const today = new Date();

if (today.getDate() === 1 && today.getMonth() === 6 ){
    console.log("es primero de Julio");
}else {
    console.log("Hoy no es primero de Julio")
}

if (today=== birthday ){
    console.log("hoy es mi cumpleaños");
}else {
    console.log("hoy no es mi cumpleaños")
}




