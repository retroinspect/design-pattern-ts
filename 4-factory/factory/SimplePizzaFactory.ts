import { CheesePizza, GreekPizza, PepperoniPizza, Pizza, VeggiePizza } from "../pizza/Pizza"

export class SimplePizzaFactory {
    createPizza(type: string): Pizza {
        let pizza: Pizza = {} as Pizza

        if (type === "cheese") {
            pizza = new CheesePizza()
        } else if (type === "pepperoni") {
            pizza = new PepperoniPizza()
        } else if (type === "veggie") {
            pizza = new VeggiePizza()
        }

        return pizza
    }
}

