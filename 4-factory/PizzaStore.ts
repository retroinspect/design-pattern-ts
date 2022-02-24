import { CheesePizza, GreekPizza, PepperoniPizza, Pizza, VeggiePizza } from "./pizza/Pizza"
import { SimplePizzaFactory } from "./factory/SimplePizzaFactory"

export abstract class PizzaStore {
    abstract createPizza(type: string): Pizza

    /**
     * 주문 시스템이 이미 잘 갖춰져 있음
     * 모든 분점에서 똑같이 진행되어야 함
     */
    orderPizza(type: string): Pizza {
        const pizza: Pizza = this.createPizza(type)
        pizza.prepare()
        pizza.bake()
        pizza.cut()
        pizza.box()
        return pizza
    }
}

