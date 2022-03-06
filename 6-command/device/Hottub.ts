export class Hottub {
	isOn: boolean
	temperature: number

	on() {
		this.isOn = true
	}

	off() {
		this.isOn = false
	}

	circulate() {
		if (this.isOn) {
			console.log("Hottub is bubbling!")
		}
	}

	jetsOn() {
		if (this.isOn) {
			console.log("Hottub jets are on")
		}
	}

	jetsOff() {
		if (this.isOn) {
			console.log("Hottub jets are off")
		}
	}

	setTemperature(temperature: number) {
		if (temperature > this.temperature) {
			console.log("Hottub is heating to a steaming " + temperature + " degrees")
		}
		else {
			console.log("Hottub is cooling to " + temperature + " degrees")
		}
		this.temperature = temperature
	}
}