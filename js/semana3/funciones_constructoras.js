/*
    Herencia en JS se trabaja con prototype
    HERO seria la clase padre y Warrior Healer heredan de esa clase y suman metodos
*/

// Funcion CONSTRUCTORA
function Hero(name, level) {
    this.name = name;
    this.level = level;
}


const hero1 = new Hero("Gandalf", 1)
console.log(hero1)
console.log(hero1.name)


console.log(hero1 instanceof Object)        // true   --> es una instancia de object
console.log(Object.getPrototypeOf(hero1))   // ver en consola


// Agregamos metodo a la clase Hero luego de haber sido creada
Hero.prototype.greet = function () {        //prototype nos permite agregar a la clase
    return `${this.name} dice hola`
}
console.log(hero1.greet())


// hacemos referencia al tipo con el metodo call (es parecido al "super")
function Warrior(name, level, weapon) {
    Hero.call(this, name, level);
    this.weapon = weapon;
}

Object.setPrototypeOf(Warrior.prototype, Hero.prototype)  //asociamos Warrior con Hero


function Healer(name, level, spell) {
    Hero.call(this, name, level);
    this.spell = spell;

    this.heal = function() {                        //siempre debe estar el this.PUESTO DE ESTA FORMA NO HEREDA
        return `${this.name} lanza ${this.spell}`
    }
}

Object.setPrototypeOf(Healer.prototype, Hero.prototype)  //asociamos Warrior con Hero

Warrior.prototype.attack = function() {             //PUESTO DE ESTA FORMA SI VAN A
    return `${this.name} lucha con ${this.weapon}`;
}

const heroGuerrero = new Warrior("Gimli", 1, "hacha");
const heroCurador = new Healer("Elron", 1, "cura")

console.log(heroGuerrero.attack())
console.log(heroCurador.heal())


//PODEMOS ARMAR QUE heroCurador herede de heroGuerrero el cual hereda de Hero)