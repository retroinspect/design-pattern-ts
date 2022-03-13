import { Amplifier } from "./Amplifier"

export class Tuner {
	description: string
	amplifier: Amplifier
	frequency: number

	constructor(description: string, amplifier: Amplifier) {
		this.description = description
		this.amplifier = amplifier
	}

	 on() {
		console.log(this.description + " on")
	}

	 off() {
		console.log(this.description + " off")
	}

	 setFrequency(frequency: number) {
		console.log(this.description + " setting frequency to " + frequency)
		this.frequency = frequency
	}

	 setAm() {
		console.log(this.description + " setting AM mode")
	}

	 setFm() {
		console.log(this.description + " setting FM mode")
	}

	toString(): string {
		return this.description
	}
}
