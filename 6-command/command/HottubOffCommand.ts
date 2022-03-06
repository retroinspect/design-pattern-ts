import { Hottub } from "../device/Hottub";
import { Command } from "./Command"

export class HottubOffCommand implements Command {
    hottub: Hottub // Receiver

    constructor(hottub: Hottub) {
        this.hottub = hottub
    }

    execute(): void {
        this.hottub.setTemperature(98);
        this.hottub.off()
    }

    undo(): void {
        this.hottub.on()
    }

}