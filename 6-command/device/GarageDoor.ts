export class GarageDoor {
    location: string

    constructor(location: string) {
        this.location = location
    }

    up(): void {
        console.log(this.location + ' GarageDoor is Open')
    }

    down(): void {
        console.log(this.location + ' GarageDoor down!')
    }

    stop(): void {
        console.log(this.location + ' GarageDoor stop!')
    }

    lightOn(): void {
        console.log(this.location + ' GarageDoor light on!')
    }

    lightOff(): void {
        console.log(this.location + ' GarageDoor light off!')
    }
}