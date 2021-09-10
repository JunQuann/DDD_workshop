import { Cart } from "../domain/Cart";
import { CartItem } from "../domain/CartItem";
import { Product } from "../domain/Product";

describe("Cart", () => {
  it("should add cart items into cart correctly", () => {
    const cart = new Cart();
    const testProduct = new Product("testProduct");
    const testCartItem = new CartItem(testProduct, 1);

    cart.add(testCartItem);

    expect(cart.getCartItems()).toEqual([testCartItem]);
  });

  it("should remove cart item from cart", () => {
    const cart = new Cart();
    const testProduct = new Product("testProduct");
    const testProduct2 = new Product("testProduct2");
    const testCartItem = new CartItem(testProduct, 1);
    const testCartItem2 = new CartItem(testProduct2, 2);

    cart.add(testCartItem);
    cart.add(testCartItem2);
    expect(cart.getCartItems()).toEqual([testCartItem, testCartItem2]);

    cart.delete(testCartItem);
    expect(cart.getCartItems()).toEqual([testCartItem2]);
  });

  it("should add product into deleted product when it is removed from cart", () => {
    const cart = new Cart();
    const testProduct = new Product("testProduct");
    const testCartItem = new CartItem(testProduct, 1);
    cart.add(testCartItem);

    cart.delete(testCartItem);
    expect(cart.getDeletedProducts()).toEqual([testProduct]);
  });

  it("should remove product from deleted products when it is added back", () => {
    const cart = new Cart();
    const testProduct = new Product("testProduct");
    const testCartItem = new CartItem(testProduct, 1);
    cart.add(testCartItem);

    cart.delete(testCartItem);
    expect(cart.getDeletedProducts()).toEqual([testProduct]);

    cart.add(testCartItem);
    expect(cart.getDeletedProducts()).toEqual([]);
  });

  it("should return false for two different carts even when cartItems are same", () => {
    const testProduct = new Product("testProduct");
    const testCartItem = new CartItem(testProduct, 1);

    const cart = new Cart();
    const cart2 = new Cart();

    cart.add(testCartItem);
    cart2.add(testCartItem);

    expect(cart.equals(cart2)).toBe(false);
  });
});
