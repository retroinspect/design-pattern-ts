import { CondimentDecorator } from "./condiments/CondimentDecorator"

export abstract class Beverage {
    description: string = "Unknown Beverage"
    condiments: CondimentDecorator[] = []

    getDescription() {
        return this.description
    }


    abstract cost(): number
}