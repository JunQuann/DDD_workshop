import { Cart } from "../domain/Cart";
import { CartItem } from "../domain/CartItem";
import { Currency, Price } from "../domain/Price";
import { Product } from "../domain/Product";
import { CartCheckout } from "../domain/service/CartCheckout";

describe("Cart", () => {
  it("should add cart items into cart correctly", () => {
    const cart = new Cart();
    const testProduct = new Product(
      "testProduct",
      new Price(1, Currency.SGD),
      10
    );
    const testCartItem = new CartItem(testProduct, 1);

    cart.add(testCartItem);

    expect(cart.cartItems).toEqual([testCartItem]);
  });

  it("should remove cart item from cart", () => {
    const cart = new Cart();
    const testProduct = new Product(
      "testProduct",
      new Price(1, Currency.SGD),
      10
    );
    const testProduct2 = new Product(
      "testProduct2",
      new Price(2, Currency.SGD),
      20
    );
    const testCartItem = new CartItem(testProduct, 1);
    const testCartItem2 = new CartItem(testProduct2, 2);

    cart.add(testCartItem);
    cart.add(testCartItem2);
    expect(cart.cartItems).toEqual([testCartItem, testCartItem2]);

    cart.delete(testCartItem);
    expect(cart.cartItems).toEqual([testCartItem2]);
  });

  it("should add product into deleted product when it is removed from cart", () => {
    const cart = new Cart();
    const testProduct = new Product(
      "testProduct",
      new Price(1, Currency.SGD),
      10
    );
    const testCartItem = new CartItem(testProduct, 1);
    cart.add(testCartItem);

    cart.delete(testCartItem);
    expect(cart.deletedProducts).toEqual([testProduct]);
  });

  it("should remove product from deleted products when it is added back", () => {
    const cart = new Cart();
    const testProduct = new Product(
      "testProduct",
      new Price(1, Currency.SGD),
      10
    );
    const testCartItem = new CartItem(testProduct, 1);
    cart.add(testCartItem);

    cart.delete(testCartItem);
    expect(cart.deletedProducts).toEqual([testProduct]);

    cart.add(testCartItem);
    expect(cart.deletedProducts).toEqual([]);
  });

  it("should return false for two different carts even when cartItems are same", () => {
    const testProduct = new Product(
      "testProduct",
      new Price(1, Currency.SGD),
      10
    );
    const testCartItem = new CartItem(testProduct, 1);

    const cart = new Cart();
    const cart2 = new Cart();

    cart.add(testCartItem);
    cart2.add(testCartItem);

    expect(cart.equals(cart2)).toBe(false);
  });

  it("should create order when cart is checked out", () => {
    const cart = new Cart();
    const testProduct = new Product(
      "testProduct",
      new Price(1, Currency.SGD),
      10
    );
    const testProduct2 = new Product(
      "testProduct2",
      new Price(2, Currency.SGD),
      20
    );
    const testCartItem = new CartItem(testProduct, 1);
    const testCartItem2 = new CartItem(testProduct2, 2);

    cart.add(testCartItem);
    cart.add(testCartItem2);

    const order = CartCheckout.checkout(cart);

    expect(order.products).toEqual([testProduct, testProduct2, testProduct2]);
  });

  it("should calculate total cost of Order", () => {
    const cart = new Cart();
    const testProduct = new Product(
      "testProduct",
      new Price(1, Currency.SGD),
      10
    );
    const testProduct2 = new Product(
      "testProduct2",
      new Price(2, Currency.SGD),
      20
    );
    const testCartItem = new CartItem(testProduct, 1);
    const testCartItem2 = new CartItem(testProduct2, 2);

    cart.add(testCartItem);
    cart.add(testCartItem2);

    const order = CartCheckout.checkout(cart);

    const expected = 10 * 0.01 + 1 + 2 * (20 * 0.01 + 2);
    expect(order.totalCost).toEqual(expected);
  });
});
