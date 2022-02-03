import { Beverage } from "./Beverage";
import { DarkRoast } from "./coffee/DarkRoast";
import { Espresso } from "./coffee/Espresso";
import { HouseBlend } from "./coffee/HouseBlend";
import { Mocha } from "./condiments/Mocha";
import { Soy } from "./condiments/Soy";
import { Whip } from "./condiments/Whip";

let beverage: Beverage = new Espresso()
console.log(beverage.getDescription() + ' $' + beverage.cost())

let beverage2: Beverage = new DarkRoast()
beverage2 = new Mocha(beverage2)
beverage2 = new Mocha(beverage2)
beverage2 = new Whip(beverage2)
console.log(beverage2.getDescription() + ' $' + beverage2.cost())

let beverage3: Beverage = new HouseBlend()
beverage3 = new Soy(beverage3)
beverage3 = new Mocha(beverage3)
beverage3 = new Whip(beverage3)
console.log(beverage3.getDescription() + ' $' + beverage3.cost())

