import { Product } from "./Product";

export class CartItem {
  private _product: Product;
  private _quantity: number;

  constructor(product: Product, quantity: number) {
    this._product = product;
    this._quantity = quantity;
  }

  getProduct() {
    return this._product;
  }
}