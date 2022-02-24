export abstract class Pizza {
    name: string
    dough: string
    sauce: string
    toppings: string[] = []

    prepare() {
        console.log('Preparing ' + this.name)
        console.log('Tossing dough...')
        console.log('Adding sauce...')
        console.log('Adding toppings...')
        for (let i = 0; i < this.toppings.length; i++) {
            console.log('   ' + this.toppings[i])
        }
    }
    bake() {
        console.log('Bake for 25 minutes at 250')
    }
    cut() {
        console.log('Cutting the pizza into diagonal slices')
    }
    box() {
        console.log('Place pizza in official PizzaStore box')
    }

    getName() {
        return this.name
    }
}

export class CheesePizza extends Pizza {
    prepare() { }
}

export class GreekPizza extends Pizza {
    prepare() { }

}

export class PepperoniPizza extends Pizza {
    prepare() { }

}

export class ClamPizza extends Pizza {
    prepare() { }

}

export class VeggiePizza extends Pizza {
    prepare() { }
}


export class NYCheesePizza extends Pizza {
    constructor() {
        super()
        this.name = "NY Style Sauce and Chesse Pizza"
        this.dough = "Thin Crust Dough"
        this.sauce = "Marinara Sauce"
        this.toppings.push('Grated Reggiano Cheese')
    }
}

export class NYGreekPizza extends Pizza {
    prepare() { }

}

export class NYPepperoniPizza extends Pizza {
    prepare() { }

}

export class NYClamPizza extends Pizza {
    prepare() { }

}

export class NYVeggiePizza extends Pizza {
    prepare() { }
}

export class ChicagoCheesePizza extends Pizza {
    constructor() {
        super()
        this.name = "Chicago Style Deep Dish Chesse Pizza"
        this.dough = "Extra Thick Crust Dough"
        this.sauce = "Plum Tomato Sauce"

        this.toppings.push('Shredded Mozzarella Cheese')
    }

    cut() {
        console.log('Cutting the pizza into square slices')
    }
}

export class ChicagoGreekPizza extends Pizza {
    prepare() { }

}

export class ChicagoPepperoniPizza extends Pizza {
    prepare() { }

}

export class ChicagoClamPizza extends Pizza {
    prepare() { }

}

export class ChicagoVeggiePizza extends Pizza {
    prepare() { }
}

export class CaliforniaCheesePizza extends Pizza {
    prepare() { }
}


export class CaliforniaPepperoniPizza extends Pizza {
    prepare() { }

}

export class CaliforniaClamPizza extends Pizza {
    prepare() { }

}

export class CaliforniaVeggiePizza extends Pizza {
    prepare() { }
}