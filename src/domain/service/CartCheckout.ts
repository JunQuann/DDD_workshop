import { Cart } from "../Cart";
import { Order } from "../Order";

export class CartCheckout {
  static checkout(cart: Cart): Order {
    const order = new Order(cart.cartItems);
    cart.checkout();

    return order;
  }
}
