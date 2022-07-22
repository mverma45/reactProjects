import { getObstacleEvents } from "./computer-vision"

interface AutonomousCar {
  isRunning?: boolean
  respond: (events: Events) => void
}
interface AutonomousCarProps {
  isRunning?: boolean
}
interface Events {
  [i: string]: boolean
}
interface Control {
  execute: (command: string) => void
}
interface Steering extends Control {
  turn: (direction: string) => void
}

class steeringControl implements Steering {}

class Car implements AutonomousCar {
  isRunning
  constructor(props: AutonomousCarProps) {
    this.isRunning = props.isRunning
  }
  respond(events: Events) {
    if (!this.isRunning) {
      return console.log("Car is off")
    }
  }
}
const autonomousCar = new Car({ isRunning: true })
autonomousCar.respond(getObstacleEvents())
