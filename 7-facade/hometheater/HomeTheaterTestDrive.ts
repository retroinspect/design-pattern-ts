import { Amplifier } from "./Amplifier"
import { CdPlayer } from "./CdPlayer"
import { PopcornPopper } from "./PopcornPopper"
import { Projector } from "./Projector"
import { StreamingPlayer } from "./StreamingPlayer"
import { TheaterLights } from "./TheaterLights"
import { Tuner } from "./Tuner"
import { Screen } from "./Screen"
import { HomeTheaterFacade } from "./HomeTheaterFacade"

export class HomeTheaterTestDrive {
	static main() {
		const amp: Amplifier = new Amplifier("Amplifier")
		const tuner: Tuner = new Tuner("AM/FM Tuner", amp)
		const player: StreamingPlayer = new StreamingPlayer("Streaming Player", amp)
		const cd: CdPlayer = new CdPlayer("CD Player", amp)
		const projector: Projector = new Projector("Projector", player)
		const lights: TheaterLights = new TheaterLights("Theater Ceiling Lights")
		const screen: Screen = new Screen("Theater Screen")
		const popper: PopcornPopper = new PopcornPopper("Popcorn Popper")

		const homeTheater =
			new HomeTheaterFacade(amp, tuner, player,
				projector, screen, lights, popper)

		homeTheater.watchMovie("Raiders of the Lost Ark")
		homeTheater.endMovie()
	}
}
