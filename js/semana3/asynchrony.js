console.log(" ASYNCHRONY 30-06-2022")
console.log()

/* 
Javascript por defecto trabaja de modo sincronico
Nosotros debemos asignarle una api asincronica para que la ultilice

IMPORTANTE SABER QUE HACER SI SALTA UN ERROR DURANTE EL USO DE LA WEB
es bueno conocer como trabaja javascript con los bucles de entos, que hace y porque lo hace para que haga lo que yo quiera
*/
// pila y cola de eventos
// PILA se maneja con una estructura LIFO (LAST INPUT-> FIRST OUTPUT  "tubo papas pringles")
// COLA se maneja con una estructura FIFO (FIRST INPUT-> FIRST OUTPUT  "cola de un banco") aca se meten las funciones asincronicas y esperan a que termine de ejecutarse la pila

// IMPORTANTE "LA COLA" se ejecuta una vez que se agota "LA PILA"

function first() {
    console.log(1);
}

function second(callback) {
    
    setTimeout(() => {
        console.log(2); 
        callback();
    }, 0)
}

function third() {
    console.log(3);
}

// SINCRONICO ejecuta first() y recien cuando acaba, empieza second()
first();
second(third);


// Hay una api asincronica integrada "settimeout"
// Al poner settimeout dentro de second se va a ejecutar despues de que se ejecuten las funciones de nivel superior ( first() second() third()) 

function func() {
    console.log("Simplemente una funcion")
}

function otherFunc (callback2) {
        callback2()
}

//otherFunc(func)
/*
// Lo siguiente funciona, pero es un CODIGO DIFICIL DE LEER "CALLBACK HELL/ "
function pyramidOfDomm() {
    setTimeout( () => {
        console.log("uno");
        setTimeout( () => {
            console.log("dos")
            setTimeout( () => {
                console.log("tres")
            }, 500)
        }, 3000  )
    }, 1000)
}

pyramidOfDomm()
*/

// callbacks es una forma ANTIGUA de manejar codigo ASINCRONICO
/* desventajas: *complicado cuando debo anidar
                *complicado cuando tengo que concatenar resultado

*/

//------------- PROMISE -------------------

// representa la finalizacion de una funcion asincronica
// PROMISE es un objeto
// normalmente vamos a CONSUMIR promesas mas que CREARLAS

//CREACION  DE PROMESAS

// tiene dos parametros "resolve" (ejecucion exitosa de la promesa) "reject" (hace referencia al rechazo por algun problema en la ejecucion)

// const promise = new Promise((resolve, reject) => {}) 

 const promise = new Promise((resolve, reject) => {
    resolve("Promesa cumplida");
   // reject("Promesa rechazada")
 }) 

 console.log(promise)


 // CONSUMIR PROMISE   ---- then -----
//decuelve en un parametro
promise.then(response => {
    console.log(response)
})

// ejemplo


const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Datos devueltos por la API")
    },3000)
   
 }) 

 console.log(promise)


 // CONSUMIR PROMISE   ---- then -----
// El then se ejecuta una vez que se resuelve la promesa
promise2.then(response => {
    console.log(response)
})



// ENCADENAR PROMESAS

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Datos devueltos por la API 2")
    },3000)
   
 }) 

 console.log(promise)

 // CONSUMIR PROMISE   ---- then -----

promise3
        .then(response1 => {
        return response1 + " - agrego algo";
        })
        .then(response2 => {
        console.log(response2 )
        })

// UNA PROMESA PUEDE DAR ERROR 
/* api no levantada, api no autorizada, mal solicitud de datos
*/
//--------------------
function getProducts(onSuccess) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (onSuccess) {
                resolve([
                    {id: 1, name: "Samsung Galaxy"},
                    {id: 2, name: "Yerba Hoja Verde"},
                    {id: 3, name: "Caramelos"},
                ])
            } else {
                reject ("Ha ocurrido un error");
            }
        },2000)
    })
}
/*
// catch devuelve el error
getProducts(true) // si pongo false sale por el catch
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(() => {       //sale si se cumple o no la promesa
        console.log("finally")
    })
*///comentado para que fucione lo de abajo con getProducts(onSucces) 

    //------------------------------------------
    // FETCH (api web integrada a JS)

    fetch("https://api.github.com/users/octocat")
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data); // este data va a ser un json de la respuesta
        })
        .catch(error => {
            console.log(error)
        })


// funciones asincronicas con ASYNC AWAIT  -- Es lo mas MODERNO

// VER asynAwait.js