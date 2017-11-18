import Animal from "./Animal"

let king = new Animal('mufasa', 4.5);


class Lion extends Animal {
    constructor(name, height, color) {
        super(name, height);
        this.color = color;
    }
    hello() {
        console.log(`hi, i'm ${this.name} from pride rock`)
    }
}

let son = new Lion("simba", 2, "golden");
son.hello()