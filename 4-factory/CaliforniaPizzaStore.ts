import { CaliforniaCheesePizza, CaliforniaPepperoniPizza, Pizza, CaliforniaVeggiePizza } from "./pizza/Pizza"
import { PizzaStore } from "./PizzaStore"

export class CaliforniaPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        let pizza: Pizza = {} as Pizza

        // fancy toppings

        if (type === "cheese") {
            pizza = new CaliforniaCheesePizza()
        } else if (type === "pepperoni") {
            pizza = new CaliforniaPepperoniPizza()
        } else if (type === "veggie") {
            pizza = new CaliforniaVeggiePizza()
        }

        return pizza
    }
}

