import { Light } from "../device/Light";
import { Command } from "./Command"

export class LightOnCommand implements Command {
    light: Light // Receiver

    constructor(light: Light) {
        this.light = light
    }

    execute(): void {
        this.light.on()
    }
    
    undo(): void {
        this.light.off()
    }

}