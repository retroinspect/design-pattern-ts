import { Light } from "../device/Light";
import { Command } from "./Command"

export class LightOffCommand implements Command {
    light: Light // Receiver

    constructor(light: Light) {
        this.light = light
    }

    execute(): void {
        this.light.off()
    }
}