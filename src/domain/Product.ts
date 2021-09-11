import { Price } from "./Price";

export class Product {
  private _name: string;
  private _price: Price;

  constructor(name: string, price: Price) {
    this._name = name;
    this._price = price;
  }

  get name(): string {
    return this._name;
  }

  get price(): Price {
    return this._price;
  }

  equals(product: Product): boolean {
    if (product instanceof Product) {
      return this._name === product.name;
    }
    return false;
  }
}
