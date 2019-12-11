import { Shape } from "./factory/Shape.interface";
import { Circle } from "./factory/models/Circle.model";
import { Rectangle } from "./factory/models/Rectangle.model";
import { Square } from "./factory/models/Square.model";

export class ShapeFactory {
  public getShape(shapeType: string): Shape | null {
    if (!shapeType) {
      return null;
    }
    if (shapeType.localeCompare("CIRCLE")) {
      return new Circle();
    } else if (shapeType.localeCompare("RECTANGLE")) {
      return new Rectangle();
    } else if (shapeType.localeCompare("SQUARE")) {
      return new Square();
    }
    return null;
  }
}
