import { Shape } from "../Shape.interface";

export class Square implements Shape {
  draw() {
    console.log("Inside Square::draw() method.");
  }
}
