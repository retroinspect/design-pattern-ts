import { Duck } from "./Duck";
import { Turkey } from "./Turkey";

export class TurkeyAdapter implements Duck {
    turkey: Turkey // Adaptee

    constructor(turkey: Turkey) {
        this.turkey = turkey
    }

    quack() {
        this.turkey.gobble()
    }

    fly() {
        for (let i=0; i<5; i++) {
            this.turkey.fly()
        }
    }
}