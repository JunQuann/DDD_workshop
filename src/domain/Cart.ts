import { uuid } from "uuidv4";
import { CartItem } from "./CartItem";
import { Product } from "./Product";

export class Cart {
  private _id: string;
  private _cartItems: CartItem[];
  private _deletedProducts: Product[];

  constructor() {
    this._id = uuid();
    this._cartItems = [];
    this._deletedProducts = [];
  }

  add(cartItem: CartItem) {
    const newDeletedProducts = this._deletedProducts.filter(
      (deletedProduct) => !deletedProduct.equals(cartItem.getProduct())
    );

    this._deletedProducts = newDeletedProducts;
    this._cartItems.push(cartItem);
  }

  delete(cartItem: CartItem) {
    const cartItemToDelete = this._cartItems.find((cartItemInCart) =>
      cartItem.getProduct().equals(cartItemInCart.getProduct())
    );

    if (cartItemToDelete) {
      const newCartItems = this._cartItems.filter(
        (item) => !item.getProduct().equals(cartItem.getProduct())
      );

      this._deletedProducts.push(cartItem.getProduct());
      this._cartItems = newCartItems;
    }
  }

  getId() {
    return this._id;
  }

  getCartItems() {
    return this._cartItems;
  }

  getDeletedProducts() {
    return this._deletedProducts;
  }

  equals(cart: Cart) {
    return this._id === cart.getId();
  }
}
