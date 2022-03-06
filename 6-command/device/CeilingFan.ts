export class CeilingFan {
	location: string = ""
	speed: number
	static HIGH = 3
	static MEDIUM = 2
	static LOW = 1
	static OFF = 0
 
	constructor(location: string) {
		this.location = location
		this.speed = CeilingFan.OFF
	}
  
	high() {
		// turns the ceiling fan on to high
		this.speed = CeilingFan.HIGH
		console.log(this.location + " ceiling fan is on high")
 
	} 

	medium() {
		// turns the ceiling fan on to medium
		this.speed = CeilingFan.MEDIUM
		console.log(this.location + " ceiling fan is on medium")
	}

	low() {
		// turns the ceiling fan on to low
		this.speed = CeilingFan.LOW
		console.log(this.location + " ceiling fan is on low")
	}
 
	off() {
		// turns the ceiling fan off
		this.speed = CeilingFan.OFF
		console.log(this.location + " ceiling fan is off")
	}
 
	getSpeed() {
		return this.speed
	}
}
