import { Shape } from "./models/Shape.interface";

export abstract class AbstractFactory {
  abstract getShape(shapeType: String): Shape | null;
}