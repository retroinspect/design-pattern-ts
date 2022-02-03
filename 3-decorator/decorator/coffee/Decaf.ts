import { Beverage } from "../Beverage";

export class Decaf extends Beverage {
    constructor() {
        super()
        this.description = "디카페인"
    }

    cost() {
        return 1.05;
    }
}