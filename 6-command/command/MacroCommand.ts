import { Light } from "../device/Light";
import { Command } from "./Command"

export class MacroCommand implements Command {
    commmands: Command[]

    constructor(commmands: Command[]) {
        this.commmands = commmands
    }

    execute(): void {
        for (let i=0; i<this.commmands.length; i++) {
            this.commmands[i].execute()
        }
    }
    
    undo(): void {
        for (let i=this.commmands.length-1; i>=0; i--) {
            this.commmands[i].undo()
        }
    }

}