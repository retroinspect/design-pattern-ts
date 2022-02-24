export abstract class Pizza {
    abstract prepare()
    bake() {}
    cut() {}
    box() {}
}

export class CheesePizza extends Pizza {
    prepare() {}
}

export class GreekPizza extends Pizza {
    prepare() {}

}

export class PepperoniPizza extends Pizza {
    prepare() {}

}

export class ClamPizza extends Pizza {
    prepare() {}

}

export class VeggiePizza extends Pizza {
    prepare() {}
}