export class Beverage {
    description: string
    milk: boolean
    soy: boolean
    mocha: boolean
    whip: boolean

    getDescription() {
        return this.description
    }

    hasMilk() {
        return this.milk
    }
    setMilk(milk) {}

    hasSoy() {
        return this.soy
    }
    setSoy(soy) {}

    hasMocha() {
        return this.mocha
    }
    setMocha(mocha) {}

    hasWhip() {
        return this.whip
    }
    setWhip(whip) {}

    cost() {
        let cost = 0
        if (this.hasMilk()) {
            cost += 30
        }

        if (this.hasSoy()) {
            cost += 30
        }

        if (this.hasMocha()) {
            cost += 60
        }

        if (this.hasWhip()) {
            cost += 100
        }

        return cost
    }

}