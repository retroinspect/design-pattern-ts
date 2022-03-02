class ChocolateBoiler {
    private static instance: ChocolateBoiler
    private empty: boolean
    private boiled: boolean

    private constructor() {
        this.empty = true
        this.boiled = false
    }

    static getInstance() {
        if (!(this.instance)) {
            return new ChocolateBoiler()
        }
        return this.instance
    }


    fill(): void {
        if ((this.isEmpty())) {
            this.empty = false
            this.boiled = false
        }
    }

    drain(): void {
        if (!(this.isEmpty()) && this.isBoiled()) {
            this.empty = true
        }
    }

    boil(): void {
        if (!(this.isEmpty()) && !(this.isBoiled())) {
            this.boiled = true
        }
    }

    isEmpty(): boolean {
        return this.empty
    }

    isBoiled(): boolean {
        return this.boiled
    }
}