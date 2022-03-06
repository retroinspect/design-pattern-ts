import { Hottub } from "../device/Hottub";
import { Command } from "./Command"

export class HottubOnCommand implements Command {
    hottub: Hottub // Receiver

    constructor(hottub: Hottub) {
        this.hottub = hottub
    }

    execute(): void {
        this.hottub.on()
        this.hottub.setTemperature(104);
        this.hottub.circulate()
    }
    
    undo(): void {
        this.hottub.off()
    }

}