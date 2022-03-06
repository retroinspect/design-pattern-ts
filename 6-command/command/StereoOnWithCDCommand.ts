import { Stereo } from "../device/Stereo";
import { Command } from "./Command"

export class StereoOnWithCDCommand implements Command {
    stereo: Stereo // Receiver

    constructor(stereo: Stereo) {
        this.stereo = stereo
    }

    execute(): void {
        this.stereo.on()
        this.stereo.setCd()
        this.stereo.setVolume(11)
    }
}