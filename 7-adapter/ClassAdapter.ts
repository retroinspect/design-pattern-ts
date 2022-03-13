
class Turkey {
    gobble(): void {}
    fly(): void {}
}

class Duck {
    quack(): void {}
    fly(): void {}
}

// 다중 상속 지원 X
/*
export class ClassAdapter extends Turkey, Duck {

    gobble(): void {
        this.gobble()
    }

    quack(): void {
        this.quack()
    }

    fly() {
        this.fly()
    }
}
*/