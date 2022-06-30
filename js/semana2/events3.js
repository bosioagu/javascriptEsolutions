const section = document.querySelector("section");

// Imprimir el objeto seleccionado
//.target
section.addEventListener("click", event => {
    console.log(event.target)   //me muestra el anidado
})

