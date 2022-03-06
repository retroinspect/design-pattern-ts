import { LightOnCommand } from "./command/LightOnCommand";
import { CeilingFan } from "./device/CeilingFan";
import { GarageDoor } from "./device/GarageDoor";
import { Light } from "./device/Light";
import { Stereo } from "./device/Stereo";
import { RemoteControl } from "./RemoteControl";
import { SimpleRemoteControl } from "./SimpleRemoteControl";
import { LightOffCommand } from "./command/LightOffCommand";

import { CeilingFanHighCommand } from "./command/CeilingFanHighCommand";
import { CeilingFanOffCommand } from "./command/CeilingFanOffCommand";

import { GarageDoorUpCommand } from "./command/GarageDoorUpCommand";
import { GarageDoorDownCommand } from "./command/GarageDoorDownCommand";

import { StereoOnWithCDCommand } from "./command/StereoOnWithCDCommand";
import { StereoOffCommand } from "./command/StereoOffCommand";
import { CeilingFanMediumCommand } from "./command/CeilingFanMediumCommand";
import { CeilingFanLowCommand } from "./command/CeilingFanLowCommand";


/*
const remote = new SimpleRemoteControl()
const light = new Light()
const lightOn = new LightOnCommand(light)

remote.setCommand(lightOn)
remote.buttonWasPressed()

const garageDoor = new GarageDoor()
const garageDoorOpenCommand = new GarageDoorOpenCommand(garageDoor)

remote.setCommand(garageDoorOpenCommand)
remote.buttonWasPressed()
*/

const remoteControl = new RemoteControl()
const livingRoomLight = new Light("Living Room")
const kitchenLight = new Light("Kitchen")
const ceilingFan = new CeilingFan("Living Room")
const garageDoor = new GarageDoor("")
const stereo = new Stereo("Living Room")


const livingRoomLightOn = new LightOnCommand(livingRoomLight);
const livingRoomLightOff = new LightOffCommand(livingRoomLight);
const kitchenLightOn = new LightOnCommand(kitchenLight);
const kitchenLightOff = new LightOffCommand(kitchenLight);

const ceilingFanHigh = new CeilingFanHighCommand(ceilingFan);
const ceilingFanOff = new CeilingFanOffCommand(ceilingFan);

const garageDoorUp = new GarageDoorUpCommand(garageDoor);
const garageDoorDown = new GarageDoorDownCommand(garageDoor);
const stereoOnWithCD = new StereoOnWithCDCommand(stereo);
const stereoOff = new StereoOffCommand(stereo);

/*
remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff);
remoteControl.setCommand(2, ceilingFanHigh, ceilingFanOff);
remoteControl.setCommand(3, stereoOnWithCD, stereoOff);

console.log(remoteControl.toString());

remoteControl.onButtonWasPushed(0);
remoteControl.offButtonWasPushed(0);

console.log(remoteControl.toString());
remoteControl.undoButtonWasPushed();

remoteControl.offButtonWasPushed(0);
remoteControl.onButtonWasPushed(0);

console.log(remoteControl.toString());
remoteControl.undoButtonWasPushed();
*/

const ceilingFanMedium = new CeilingFanMediumCommand(ceilingFan)

remoteControl.setCommand(0, ceilingFanMedium, ceilingFanOff)
remoteControl.setCommand(1, ceilingFanHigh, ceilingFanOff)

remoteControl.onButtonWasPushed(0)
remoteControl.offButtonWasPushed(1)
console.log(remoteControl.toString())
remoteControl.undoButtonWasPushed()

remoteControl.onButtonWasPushed(1)
console.log(remoteControl.toString())
remoteControl.undoButtonWasPushed()

/*
remoteControl.onButtonWasPushed(1);
remoteControl.offButtonWasPushed(1);
remoteControl.onButtonWasPushed(2);
remoteControl.offButtonWasPushed(2);
remoteControl.onButtonWasPushed(3);
remoteControl.offButtonWasPushed(3);
*/