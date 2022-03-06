export class StringBuffer {
    buffer: string[]

    constructor() {
        this.buffer = []
    }

    append(str: string) {
        this.buffer.push(str)
        return this
    }

    toString(): string {
        return this.buffer.join("")
    }
}