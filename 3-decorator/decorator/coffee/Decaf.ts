import { Beverage } from "../Beverage";

export class Decaf extends Beverage {
    constructor() {
        super()
        this.description = "๋์นดํ์ธ"
    }

    cost() {
        return 1.05;
    }
}