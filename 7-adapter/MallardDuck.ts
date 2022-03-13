import { Duck } from "./Duck";

export class MallardDuck implements Duck {
    quack() {
        console.log('quack')
    }

    fly() {
        console.log("I'm flying")
    }
}