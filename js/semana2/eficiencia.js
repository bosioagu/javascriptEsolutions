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
