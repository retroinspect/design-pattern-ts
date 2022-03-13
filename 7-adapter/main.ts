import { Duck } from "./Duck";
import { MallardDuck } from "./MallardDuck";
import { TurkeyAdapter } from "./TurkeyAdapter";
import { WildTurkey } from "./WildTurkey";

class DuckTestDrive {
    static main() {
        const duck = new MallardDuck()
        const turkey = new WildTurkey()
        const turkeyAdapter = new TurkeyAdapter(turkey)

        console.log("The Turkey says...")
        turkey.gobble()
        turkey.fly()

        console.log("The Duck says...")
        this.testDuck(duck)

        console.log("The TurkeyAdapter says...")
        this.testDuck(turkeyAdapter)
    }

    static testDuck(duck: Duck) {
        duck.quack()
        duck.fly()
    }
}

DuckTestDrive.main()