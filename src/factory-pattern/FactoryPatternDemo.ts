import { ShapeFactory } from "./ShapeFactory";
import { Shape } from "./factory/Shape.interface";

export class FactoryPatternDemo {
  public static main(): void {
    let shapeFactory: ShapeFactory = new ShapeFactory();

    //get an object of Circle and call its draw method.
    let shape1: Shape | null = shapeFactory.getShape("CIRCLE");

    //call draw method of Circle
    if (shape1) shape1.draw();

    //get an object of Rectangle and call its draw method.
    let shape2: Shape | null = shapeFactory.getShape("RECTANGLE");

    //call draw method of Rectangle
    if (shape2) shape2.draw();

    //get an object of Square and call its draw method.
    let shape3: Shape | null = shapeFactory.getShape("SQUARE");

    //call draw method of square
    if (shape3) shape3.draw();
  }
}
