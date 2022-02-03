import { Beverage } from "../Beverage";
import { CondimentDecorator } from "./CondimentDecorator";

export class Soy extends CondimentDecorator {
    beverage: Beverage

    constructor(beverage: Beverage) {
        super()
        this.beverage = beverage
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", 두유"
    }

    cost() {
        return 0.15 + this.beverage.cost()
    }

}