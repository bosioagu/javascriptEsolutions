/*
// Probando las propiedades de key y code
document.addEventListener("keydown", event => {
    console.log("key: " + event.key)
    console.log("code: " + event.code);
    if (event.key == "ArrowUp") {
      changeText()
    }
  })
*/

  //Pasar un evento a un detector

document.addEventListener("keydown", event => {
    const element = document.querySelector("p");
    //Establecer variables para el codigo keydown
    const a = "KeyA";
    const s = "KeyS";
    const d = "KeyD";
    const w = "KeyW";

    switch (event.code) {
        case a:
            element.textContent = "Izquierda";
            break;
        
        case s:
            element.textContent = "Abajo";
            break;
        
        case d:
            element.textContent = "Derecha";
            break;

        case w:
            element.textContent = "Arriba";
            break;

    }

})