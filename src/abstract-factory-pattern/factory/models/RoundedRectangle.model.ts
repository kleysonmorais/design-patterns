import { Shape } from "./Shape.interface";

export class RoundedRectangle implements Shape {
  draw() {
    console.log("Inside RoundedRectangle::draw() method.");
  }
}
