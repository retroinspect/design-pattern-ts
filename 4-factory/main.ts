import { ChicagoPizzaFactory } from "./factory/ChicagoPizzaFactory";
import { NYPizzaFactory } from "./factory/NYPizzaFactory";
import { PizzaStore } from "./PizzaStore";

const nyFactory = new NYPizzaFactory()
const nyStore = new PizzaStore(nyFactory)

const chicagoFactory = new ChicagoPizzaFactory()
const chicagoStore = new PizzaStore(chicagoFactory)