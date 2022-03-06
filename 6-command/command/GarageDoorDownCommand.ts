import { GarageDoor } from "../device/GarageDoor";
import { Command } from "./Command"

export class GarageDoorDownCommand implements Command {
    garageDoor: GarageDoor // Receiver

    constructor(garageDoor: GarageDoor) {
        this.garageDoor = garageDoor
    }

    execute(): void {
        this.garageDoor.down()
    }

    undo(): void {
        this.garageDoor.up()
    }

}