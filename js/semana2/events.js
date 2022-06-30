

/* Los eventos son acciones que tienen lugar en el navegador y pueden ser iniciados por el usuario o por el mismo navegador
 Un controlador de eventos es una funcion que se ejecuta cuando se desarrolla un evento
 Un DETECTOR DE EVENTOS es lo que esta esperando la activacion del evento

*/

// Funcion para modificar el contenido del texto del parrafo.

const changeText = () => {
  const p = document.querySelector("p");
  p.textContent = "El texto se cambió al apretar el boton";
}

const alertText = () => {
  alert("¿Cambiaré?")
}

/*CON PROPIEDAD DEL CONTROLADOR DE EVENTOS
// Agregar controlador de evento como una propiedad del elemento boton.

const boton = document.querySelector("button");
boton.onclick = changeText;

// Cuidado, los eventos se pueden sobrescribir
// boton.onclick = alertText;
*/

//FORMA DE USAR CORRECTAMENTE, ES CON DETECTOR DE EVENTOS 
//No tocamos el html 
// -------------- addEventListener --------------------

const boton  = document.querySelector("button");
const h3     = document.querySelector("h3");

boton.addEventListener("click", changeText);
boton.addEventListener("click", alertText);
boton.addEventListener("click", () => {
  h3.textContent = "Se cambia utilizando detector de evento con una funcion anonima";
  
boton.removeEventListener("click", alertText)//remueve el evento

})




