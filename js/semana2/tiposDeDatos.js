// JS es un lenguaje tipificados dinamicamente, puedo cambiar el tipo de dato durante la programacion, puede pasar de ser un string a number por  ejemplo

/*
number
string
boolean


OBSERVACIONES
Ver siempre que tipo de datos  quiero trabajar, por ejemplo no dejar que un resultado que necesito sea numerico, sea tomado como string.
evitar que javascript sea el que decide que tipo de dato es

*/
//DATOS DINAMICOS:

let t ;
t = 30;
t = "musica";
t = true;
console.log(t)

let num1 = 34;
let num2 = 34.56;
let num3 = 9e8; // 900000000
let num4 = 9e-5; // 0.00009 
console.log(num3)

x= 0
/*
while (num1 != Infinity) {
    num1 ++;
    x += num1;
} 
*/

console.log(`La suma de  ${num1 + num2}`)


//CUANDO TENGO QUE ENCOMILLAR DENTRO DEL STRING
// caracter de escape

let str1 = "hoy hace \" mucho \" frio"

// o usar backstick ` ` MEJOR SOLUCION

let str2 = `Hoy hace "mucho" frio`    
let s = `<span style = ${num1}></span>`

console.log(s)


const largeText = `Este es un texto muy extenso
                   para tenerlo en una sola linea y 
                   necesito que se vea de esta manera`


