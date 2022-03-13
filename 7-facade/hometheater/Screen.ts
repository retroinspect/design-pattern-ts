
export class Screen {
	description: string

	constructor(description: string) {
		this.description = description
	}

	 up() {
		console.log(this.description + " going up")
	}

	 down() {
		console.log(this.description + " going down")
	}


	toString(): string {
		return this.description
	}
}
