import { CartItem } from "./CartItem";
import { Product } from "./Product";

export class Order {
  private _products: Product[];
  private _totalCost: number;

  constructor(cartItems: CartItem[]) {
    this._products = [];
    this._totalCost = 0;

    cartItems.forEach((cartItem) => {
      const quantity = cartItem.quantity;
      for (let i = 0; i < quantity; i++) {
        this._products.push(cartItem.product);
      }
    });

    this._products.forEach((product) => {
      const totalCostOfProduct =
        product.price.amount + product.weightInGrams * 0.01;
      this._totalCost += totalCostOfProduct;
    });
  }

  get products() {
    return this._products;
  }

  get totalCost() {
    return this._totalCost;
  }
}
