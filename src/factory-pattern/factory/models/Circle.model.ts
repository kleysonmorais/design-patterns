import { Shape } from "../Shape.interface";

export class Circle implements Shape {
  draw() {
    console.log("Inside Circle::draw() method.");
  }
}
