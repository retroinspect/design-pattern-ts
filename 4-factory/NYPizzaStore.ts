import { NYCheesePizza, NYPepperoniPizza, Pizza, NYVeggiePizza } from "./pizza/Pizza"
import { PizzaStore } from "./PizzaStore"

export class NYPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        let pizza: Pizza = {} as Pizza

        // thin bread

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

