import { GarageDoor } from "../device/GarageDoor";
import { Command } from "./Command"

export class GarageDoorUpCommand implements Command {
    garageDoor: GarageDoor // Receiver

    constructor(garageDoor: GarageDoor) {
        this.garageDoor = garageDoor
    }

    execute(): void {
        this.garageDoor.up()
    }
}