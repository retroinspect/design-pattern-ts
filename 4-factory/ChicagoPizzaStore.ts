import { ChicagoCheesePizza, ChicagoPepperoniPizza, Pizza, ChicagoVeggiePizza } from "./pizza/Pizza"
import { PizzaStore } from "./PizzaStore"

export class ChicagoPizzaStore extends PizzaStore {
    createPizza(type: string): Pizza {
        let pizza: Pizza = {} as Pizza

        // thick bread

        if (type === "cheese") {
            pizza = new ChicagoCheesePizza()
        } else if (type === "pepperoni") {
            pizza = new ChicagoPepperoniPizza()
        } else if (type === "veggie") {
            pizza = new ChicagoVeggiePizza()
        }

        return pizza
    }
}

