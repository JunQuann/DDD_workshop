export class Product {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  getName(): string {
    return this._name;
  }

  equals(product: Product): boolean {
    return this._name === product.getName();
  }
}
