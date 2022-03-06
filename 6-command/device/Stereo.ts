export class Stereo {
    location: string

    constructor(location: string) {
        this.location = location
    }

    on(): void {
        console.log(this.location + ' Stereo is on!')
    }

    off(): void {
        console.log(this.location + ' Stereo is off!')
    }

    setCd() {
        console.log(this.location + ' Stereo set CD!')
    }

    setDvd() {
        console.log(this.location + ' Stereo set DVD!')

    }

    setRadio() {
        console.log(this.location + ' Stereo set radio!')
    }

    setVolume(volume: number) {
        console.log(this.location + ` Stereo set volume to ${volume}!`)
    }
}