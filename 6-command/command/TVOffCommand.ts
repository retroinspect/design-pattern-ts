import { TV } from "../device/TV";
import { Command } from "./Command"

export class TVOffCommand implements Command {
    tv: TV // Receiver

    constructor(tv: TV) {
        this.tv = tv
    }

    execute(): void {
        this.tv.off()
    }

    undo(): void {
        this.tv.on()
    }

}