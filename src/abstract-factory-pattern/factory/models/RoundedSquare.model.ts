import { Shape } from "./Shape.interface";

export class RoundedSquare implements Shape {
  draw() {
    console.log("Inside RoundedSquare::draw() method.");
  }
}