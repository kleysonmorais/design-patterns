import { AbstractFactory } from "./factory/AbstractFactory.abstract";
import { ShapeFactory } from "./ShapeFactory";

export class FactoryProducer {
  public static getFactory(rounded: Boolean): AbstractFactory {
    if (rounded) {
      return new RoundedShapeFactory();
    } else {
      return new ShapeFactory();
    }
  }
}
