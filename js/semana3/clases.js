const x = function () {

}

const y = class {
    
}

const x1 = new x();

const y1 = new y();


class Hero {
    constructor(name, level){
        this.name = name;
        this.level = level;
    }

    greet() {
        return `${this.name} del nivel ${this.level} dice hola`;
    }
}

const hero1 = new Hero("Pepe", 2)
console.log(hero1)
console.log(hero1.__proto__)
console.log(hero1.greet())

class Mage extends Hero {
    constructor(name, level, spell) {
        super (name, level);                         // para asignar los atributos del padre Hero
        this.spell = spell;                          // atributo propio de Mage
    }
    run() {
        return `${this.name} esta corriendo`
    }
}

const hero2 = new Mage ("Gandalf", 2, "hechizo")
console.log(hero2)
console.log(hero2.run())
console.log(hero2.__proto__)

