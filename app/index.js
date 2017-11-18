function Wizard(name, house, pet) {
    this.name = name;
    this.house = house; 
    this.pet = pet;
    this.greet = () =>  { return `I'm ${this.name} from ${this.house}`}
}

let harry = new Wizard("Harry Potter", "Gryffindor", "Owl")

Wizard.prototype.petName;
harry.petName = "Hedwig"


Wizard.prototype.info = function() {
    return `I have a ${this.pet} named ${this.petName}`
}


console.log(harry.greet())
console.log(harry.info())
