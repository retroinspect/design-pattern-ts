import { Beverage } from "../Beverage";
import { CondimentDecorator } from "./CondimentDecorator";

export class SteamMilk extends CondimentDecorator {
    beverage: Beverage

    constructor(beverage: Beverage) {
        super()
        this.beverage = beverage
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", 스팀 밀크"
    }

    cost() {
        return 0.10 + this.beverage.cost()
    }

}