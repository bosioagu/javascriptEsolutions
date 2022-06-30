console.log("29/6/2022 - Repaso");

// PARAMETROS PREDETERMINADOS

// ---------- SIN parametro predeterminado -----------------------
// x es el PARAMETRO con la particularidad que esta contenido en el bloque de la funcion y que no tiene un valor especifico. 
function square(x) {        
    return x * x;
}
// el 2 es el ARGUMENTO
square(2); 


// ---------- CON parametro predeterminado -----------------------
// El 0 es un PARAMETRO PREDETERMINADO, no esta en la llamada de la funcion. Lo que hace es que si no envio ARGUMENTO en la funcion, el valor va a ser 0
function square2(x = 0) {        
    return x * x;
}

square2(); 

//--

function manyParams(number = 10, string = "Hola", boolean = true, object = {id : 1,}, array = [3, 4, 6,], nullValue = null){
  console.log( number, string, boolean, object, array, nullValue)

}
manyParams();


//---
function setting(options = {}) {
    const { brightness, contrast } = options;
}

setting();

//---
function sum(a = 1, b = 1) {
    return a + b
}


//--- INCORRECTO poner el parametro predeterminado en el pimer parametro
function sum2(a = 1, b) {
    return a + b
}

//--- CORRECTO poner el parametro predeterminado en el pimer parametro
function sum3(a, b = 1) {
    return a + b
}

//---
function creatures(name, age, userObj = { name, age }) {
    return userObj;
}

creatures("Homero Simpson", 50);


//--- FUNCION COMO VALOR PREDETERMINADO
function getRandom(){
    return Math.floor(Math.random() * 10)
}

function cube(x = getRandom()) {
    return x * x * x
}



//--- 
function equal(x =  getRandom(), y = Math.pow(x, 2)) {
    return x === y;
}

//--- definimos una funcion dentro de una funcion
function executeFunction(x = 2, 
    cb = function inner() {
        return x * 100; 
    }
    ){ 
    return cb()

}