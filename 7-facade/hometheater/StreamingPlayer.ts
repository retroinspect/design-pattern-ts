import { Amplifier } from "./Amplifier"

export class StreamingPlayer {
	description: string
	currentChapter: number
	amplifier: Amplifier
	movie: string

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

	play(input: string | number) {
		if (typeof input === 'string') {
			this.playMovie(input)
		} else if (typeof input === 'number') {
			this.playChapter(input)
		}
	}

	playMovie(movie: string) {
		this.movie = movie
		this.currentChapter = 0
		console.log(this.description + " playing \"" + movie + "\"")
	}

	playChapter(chapter: number) {
		if (this.movie == null) {
			console.log(this.description + " can't play chapter " + chapter + " no movie selected")
		} else {
			this.currentChapter = chapter
			console.log(this.description + " playing chapter " + this.currentChapter + " of \"" + this.movie + "\"")
		}
	}

	stop() {
		this.currentChapter = 0
		console.log(this.description + " stopped \"" + this.movie + "\"")
	}

	pause() {
		console.log(this.description + " paused \"" + this.movie + "\"")
	}

	setTwoChannelAudio() {
		console.log(this.description + " set two channel audio")
	}

	setSurroundAudio() {
		console.log(this.description + " set surround audio")
	}

	toString(): string {
		return this.description
	}
}
