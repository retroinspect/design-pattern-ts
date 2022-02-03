import { Beverage } from "./beverage";

class DarkRoast extends Beverage {
    constructor() {
        super()
        this.description = "최고의 다크 로스트 커피"
    }

    cost() {
        return 300 + super.cost()
    }

}