import { CheesePizza, GreekPizza, PepperoniPizza, Pizza, VeggiePizza } from "./pizza/Pizza"
import { SimplePizzaFactory } from "./SimplePizzaFactory"

class PizzaStore {
    orderPizza(type: string): Pizza {
        const factory: SimplePizzaFactory = new SimplePizzaFactory()
        const pizza: Pizza = factory.createPizza(type)
        pizza.prepare()
        pizza.bake()
        pizza.cut()
        pizza.box()
        return pizza
    }
}

