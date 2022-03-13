import { Duck } from "./Duck";
import { Turkey } from "./Turkey";

export class DuckAdapter implements Turkey {
    duck: Duck // Adaptee

    constructor(duck: Duck) {
        this.duck = duck
    }

    gobble(): void {
        this.duck.quack()
    }

    fly() {
        this.duck.fly()
    }
}