import { uuid } from "uuidv4";
import { CartItem } from "./CartItem";
import { Order } from "./Order";
import { Product } from "./Product";

export class Cart {
  private _id: string;
  private _cartItems: CartItem[];
  private _deletedProducts: Product[];
  private _checkedOut: boolean;

  constructor() {
    this._id = uuid();
    this._cartItems = [];
    this._deletedProducts = [];
    this._checkedOut = false;
  }

  add(cartItem: CartItem): void {
    const productPrice = cartItem.product.price.toString();
    console.log(productPrice);

    const newDeletedProducts = this._deletedProducts.filter(
      (deletedProduct) => !deletedProduct.equals(cartItem.product)
    );

    this._deletedProducts = newDeletedProducts;
    this._cartItems.push(cartItem);
  }

  delete(cartItem: CartItem): void {
    const cartItemToDelete = this._cartItems.find((cartItemInCart) =>
      cartItem.product.equals(cartItemInCart.product)
    );

    if (cartItemToDelete) {
      const newCartItems = this._cartItems.filter(
        (item) => !item.product.equals(cartItem.product)
      );

      this._deletedProducts.push(cartItem.product);
      this._cartItems = newCartItems;
    }
  }

  checkout(): void {
    this._checkedOut = true;
  }

  get id(): string {
    return this._id;
  }

  get cartItems(): CartItem[] {
    return this._cartItems;
  }

  get deletedProducts(): Product[] {
    return this._deletedProducts;
  }

  get checkedout(): boolean {
    return this._checkedOut;
  }

  equals(cart: Cart): boolean {
    if (cart instanceof Cart) {
      return this._id === cart.id;
    }
    return false;
  }
}
