export class Singleton {
    static uniqueInstance: Singleton;

    private constructor() {}

    static getInstance(): Singleton {
        if (!this.uniqueInstance) {
            this.uniqueInstance = new Singleton()
        }
        return this.uniqueInstance
    }
}