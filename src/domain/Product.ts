import { Price } from "./Price";

export class Product {
  private _name: string;
  private _price: Price;
  private _weightInGrams: number;

  constructor(name: string, price: Price, weightInGrams: number) {
    this._name = name;
    this._price = price;
    this._weightInGrams = weightInGrams;
  }

  get name(): string {
    return this._name;
  }

  get price(): Price {
    return this._price;
  }

  get weightInGrams(): number {
    return this._weightInGrams;
  }

  equals(product: Product): boolean {
    if (product instanceof Product) {
      return this._name === product.name;
    }
    return false;
  }
}
