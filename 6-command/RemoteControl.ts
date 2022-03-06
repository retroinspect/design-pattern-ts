import { Command } from "./command/Command";
import { NoCommand } from "./command/NoCommand";
import { StringBuffer } from "./StringBuffer";

export class RemoteControl {
    onCommands: Command[]
    offCommands: Command[]

    constructor() {
        this.onCommands = []
        this.offCommands =  []

        for (let i=0; i<7; i++) {
            this.onCommands.push(new NoCommand())
            this.offCommands.push(new NoCommand())
        }
    }

    setCommand(slot: number, onCommand: Command, offCommand: Command) {
        this.onCommands[slot] = onCommand
        this.offCommands[slot] = offCommand
    }

    onButtonWasPushed(slot: number) {
        this.onCommands[slot].execute()
    }

    offButtonWasPushed(slot: number) {
        this.offCommands[slot].execute()
    }

    toString(): string {
        const stringBuff = new StringBuffer()
        stringBuff.append("\n------ Remote Control ------\n")
        for (let i=0; i<this.onCommands.length; i++) {
            const onClassName = this.onCommands[i].constructor.prototype.constructor.name
            const offClassName = this.offCommands[i].constructor.prototype.constructor.name
            stringBuff.append(`[slot ${i}] ${onClassName} ${offClassName}\n`)
        }

        return stringBuff.toString()
    }
}