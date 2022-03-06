import { TV } from "../device/TV";
import { Command } from "./Command"

export class TVOnCommand implements Command {
    tv: TV // Receiver

    constructor(tv: TV) {
        this.tv = tv
    }

    execute(): void {
        this.tv.on()
        this.tv.setInputChannel()
    }
    
    undo(): void {
        this.tv.off()
    }

}