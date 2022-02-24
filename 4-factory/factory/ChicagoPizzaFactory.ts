import { ChicagoCheesePizza, ChicagoPepperoniPizza, Pizza, ChicagoVeggiePizza } from "../pizza/Pizza"
import { SimplePizzaFactory } from "./SimplePizzaFactory"

export class ChicagoPizzaFactory extends SimplePizzaFactory {
    createPizza(type: string): Pizza {
        let pizza: Pizza = {} as Pizza

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

