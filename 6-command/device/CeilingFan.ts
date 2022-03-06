export class CeilingFan {
	location: string = ""
	level: number
	static HIGH = 2
	static MEDIUM = 1
	static LOW = 0
 
	constructor(location: string) {
		this.location = location
	}
  
	high() {
		// turns the ceiling fan on to high
		this.level = CeilingFan.HIGH
		console.log(this.location + " ceiling fan is on high")
 
	} 

	medium() {
		// turns the ceiling fan on to medium
		this.level = CeilingFan.MEDIUM
		console.log(this.location + " ceiling fan is on medium")
	}

	low() {
		// turns the ceiling fan on to low
		this.level = CeilingFan.LOW
		console.log(this.location + " ceiling fan is on low")
	}
 
	off() {
		// turns the ceiling fan off
		this.level = 0
		console.log(this.location + " ceiling fan is off")
	}
 
	getSpeed() {
		return this.level
	}
}
