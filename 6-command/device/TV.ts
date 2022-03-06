export class TV {
    location: string
    channel: number

    constructor(location: string) {
        this.location = location
    }

    on(): void {
        console.log(`${this.location} TV is on!`)
    }

    off(): void {
        console.log(`${this.location} TV is off!`)
    }

    setInputChannel() {
		this.channel = 3;
		console.log(this.location + " TV channel is set for DVD");
    }
}