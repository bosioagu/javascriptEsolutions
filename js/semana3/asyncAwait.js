console.log(" ASYNC AWAIT 30-06-2022")
console.log()

// funciones asincronicas con ASYNC AWAIT  -- Es lo mas MODERNO
// permite manejar codigo asincronico de modo sincronico*
// podria combinarlo con generadores

//  al poner async, convierte la funcion en una promesa
/*
async function getUsers() {
    return {id: 1, name: "Homero"}
}

getUsers()
    .then(response => {
        console.log(response)   //el response es el return
    })

*/
// al poner async, convierte la funcion en una promesa
//await antes de seguir await("espera") que devuelva o que jsonifica
async function getUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/")
        const data = await response.json();
        //return data  -- si quiero sacar los datos
        console.log(data)
    } catch (error) {
        console.log("Error: " + error)
    }
}

getUsers()

/* ESTO SI QUIERO SACAR LOS DATOS
    .then(response => {
        console.log(response)
    })
    .catch(error => {
        error
    })
*/
    