class Animal {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }
    hello () {
        console.log(`hi i'm ${this.name} from the animal kindom`)
    }
}

export default Animal;