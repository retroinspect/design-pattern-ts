import { NYCheesePizza, NYPepperoniPizza, Pizza, NYVeggiePizza } from "../pizza/Pizza"
import { SimplePizzaFactory } from "./SimplePizzaFactory"

export class NYPizzaFactory extends SimplePizzaFactory {
    createPizza(type: string): Pizza {
        let pizza: Pizza = {} as Pizza

        if (type === "cheese") {
            pizza = new NYCheesePizza()
        } else if (type === "pepperoni") {
            pizza = new NYPepperoniPizza()
        } else if (type === "veggie") {
            pizza = new NYVeggiePizza()
        }

        return pizza
    }
}

