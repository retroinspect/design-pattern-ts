import { CeilingFan } from "../device/CeilingFan";
import { Command } from "./Command"

export class CeilingFanOffCommand implements Command {
    ceilingFan: CeilingFan // Receiver

    constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan
    }

    execute(): void {
        this.ceilingFan.off()
    }
}