import { Shape } from "./Shape.interface";

export class Rectangle implements Shape {
  draw() {
    console.log("Inside Rectangle::draw() method.");
  }
}