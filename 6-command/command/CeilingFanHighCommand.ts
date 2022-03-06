import { CeilingFan } from "../device/CeilingFan";
import { Command } from "./Command"

export class CeilingFanHighCommand implements Command {
    ceilingFan: CeilingFan // Receiver
    prevSpeed: number

    constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan
    }

    execute(): void {
        this.prevSpeed = this.ceilingFan.getSpeed()
        this.ceilingFan.high()
    }

    undo(): void {        
        if (this.prevSpeed === CeilingFan.HIGH) {
            this.ceilingFan.high()
        } else if (this.prevSpeed === CeilingFan.MEDIUM) {
            this.ceilingFan.medium()
        } else if (this.prevSpeed === CeilingFan.LOW) {
            this.ceilingFan.low()
        } else if (this.prevSpeed === CeilingFan.OFF) {
            this.ceilingFan.off()
        }
    }

}