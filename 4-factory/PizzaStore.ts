import { CheesePizza, GreekPizza, PepperoniPizza, Pizza, VeggiePizza } from "./pizza/Pizza"

class PizzaStore {
    orderPizza(type: string): Pizza {
        let pizza: Pizza = {} as Pizza
        if (type === "cheese") {
            pizza = new CheesePizza()
        // } else if (type === "greek") {
        //     pizza = new GreekPizza()
        } else if (type === "pepperoni") {
            pizza = new PepperoniPizza()
        } else if (type === "veggie") {
            pizza = new VeggiePizza()
        }

        pizza.prepare()
        pizza.bake()
        pizza.cut()
        pizza.box()
        return pizza
    }
}

