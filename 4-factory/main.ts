import { CaliforniaPizzaStore } from "./CaliforniaPizzaStore";
import { ChicagoPizzaStore } from "./ChicagoPizzaStore";
import { NYPizzaStore } from "./NYPizzaStore";

const nyStore = new NYPizzaStore()
let pizza = nyStore.orderPizza('cheese')
console.log('Ethan ordered a ' + pizza.getName())

const chicagoStore = new ChicagoPizzaStore()
pizza = chicagoStore.orderPizza('cheese')
console.log('Joel ordered a ' + pizza.getName())

const californiaStore = new CaliforniaPizzaStore()