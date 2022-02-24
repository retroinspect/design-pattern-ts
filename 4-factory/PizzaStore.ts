import { CheesePizza, GreekPizza, PepperoniPizza, Pizza, VeggiePizza } from "./pizza/Pizza"
import { SimplePizzaFactory } from "./factory/SimplePizzaFactory"

export class PizzaStore {
    factory: SimplePizzaFactory

    constructor(factory: SimplePizzaFactory) {
        this.factory = factory
    }

    orderPizza(type: string): Pizza {
        const pizza: Pizza = this.factory.createPizza(type)
        pizza.prepare()
        pizza.bake()
        pizza.cut()
        pizza.box()
        return pizza
    }
}

export class NYPizzaStore {

}

