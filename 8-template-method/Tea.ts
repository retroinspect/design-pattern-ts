import { CaffeineBeverage } from "./CaffeineBeverage";

export class Tea extends CaffeineBeverage {
    brew() {
        console.log("차를 우려내는 중")
    }

    addCondiments() {
        console.log("레몬을 추가하는 중")
    }
}