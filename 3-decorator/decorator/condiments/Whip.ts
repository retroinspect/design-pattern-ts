import { Beverage } from "../Beverage";
import { CondimentDecorator } from "./CondimentDecorator";

export class Whip extends CondimentDecorator {
    beverage: Beverage

    constructor(beverage: Beverage) {
        super()
        this.beverage = beverage
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", 휘핑 크림"
    }

    cost() {
        return 0.10 + this.beverage.cost()
    }

}