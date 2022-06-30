// OBJETO JSON escrito en formato JS. Lo asociamos a una variable para que JS 

//Al ser un Objeto JS podemos poner funciones, si es un.json no podemos meter funciones
const homer = {                 
    "first_name" : "Homero",
    "last_name" : "Simpson",
    "location" : "Springfield",
    "online" : true,
    "followers" : 878,
    "full_name" : function() {
        return this.first_name + " " + this.last_name;
    }
}

// esto es un OBJETO JS PURO
const lisa = {                 
    first_name : "Lisa",
    last_name : "Simpson",
    location : "Springfield",
    online : true,
    followers : 878,
    full_name : function() {
        return this.first_name + " " + this.last_name;
    }
}

// DE ESTA MANERA ES UN STRING
const bart = `{"first_name" : "Bart", "last_name" : "Simpson",   "location" : "Springfield", "online" : true, "followers" : 878
}`;

const userBart = {
    "first_name" : "Bart",
    "last_name" : "Simpson",
    "location" : "Springfield",
    "parents" : [
        {
            "first_name" : "Homero",
            "last_name" : "Simpson"
        },
        {
            "first_name" : "Marge",
            "last_name" : "Bouvier"
        }
    ],
    "pets" : [
        {
            "breed" : "galgo",
            "name"  : "ayudante de Santa"
        },
        {
            "breed" : "raza gato",
            "name" : "Bola de nieve"
        }
    ]
};

console.log( userBart.pets[0].breed)

// FUNCION STRINGIFY transforma el objeto a string con formato JSON - NO Stringifica Metodos

const str1 = JSON.stringify(lisa)
console.log(str1)

// FUNCION PARSE transforma un string a un OBJETO

const obj1 = JSON.parse(bart)
console.log(obj1)
console.log(obj1.first_name)