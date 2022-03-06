export class Light {
    location: string

    constructor(location: string) {
        this.location = location
    }

    on(): void {
        console.log(`${this.location} light on!`)
    }

    off(): void {
        console.log(`${this.location} light off!`)
    }
}