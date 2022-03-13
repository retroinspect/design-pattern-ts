import { StreamingPlayer } from "./StreamingPlayer"
import { Tuner } from "./Tuner"

export class Amplifier {
	description: string
	tuner: Tuner
	player: StreamingPlayer

	constructor(description: string) {
		this.description = description
	}

	on() {
		console.log(this.description + " on")
	}

	off() {
		console.log(this.description + " off")
	}

	setStereoSound() {
		console.log(this.description + " stereo mode on")
	}

	setSurroundSound() {
		console.log(this.description + " surround sound on (5 speakers, 1 subwoofer)")
	}

	setVolume(level: number) {
		console.log(this.description + " setting volume to " + level)
	}

	setTuner(tuner: Tuner) {
		console.log(this.description + " setting tuner to " + this.player)
		this.tuner = tuner
	}

	setStreamingPlayer(player: StreamingPlayer) {
		console.log(this.description + " setting Streaming player to " + player)
		this.player = player
	}

	toString(): string {
		return this.description
	}
}
