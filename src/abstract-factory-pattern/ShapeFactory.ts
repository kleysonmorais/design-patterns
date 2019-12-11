import { Shape } from "./factory/models/Shape.interface";
import { Rectangle } from "./factory/models/Rectangle.model";
import { AbstractFactory } from "./factory/AbstractFactory.abstract";
import { Square } from "./factory/models/Square.model";

export class ShapeFactory extends AbstractFactory {
  public getShape(shapeType: String): Shape | null {
    if (shapeType.localeCompare("RECTANGLE")) {
      return new Rectangle();
    } else if (shapeType.localeCompare("SQUARE")) {
      return new Square();
    }
    return null;
  }
}
