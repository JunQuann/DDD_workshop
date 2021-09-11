import { Cart } from "./domain/Cart";
import { CartItem } from "./domain/CartItem";
import { Currency, Price } from "./domain/Price";
import { Product } from "./domain/Product";

const cart = new Cart();
const cart2 = new Cart();

const iPadPro = new Product("Ipad Pro", new Price(999, Currency.SGD));
const heroInkPen = new Product("Hero Ink Pen", new Price(59, Currency.THB));
const gmCricketBat = new Product(
  "GM Cricket bat",
  new Price(199, Currency.USD)
);

cart.add(new CartItem(iPadPro, 1));
cart.add(new CartItem(heroInkPen, 1));
cart.add(new CartItem(gmCricketBat, 2));

cart2.add(new CartItem(iPadPro, 1));
cart2.add(new CartItem(heroInkPen, 1));
cart2.add(new CartItem(gmCricketBat, 2));

console.log(cart);
console.log(cart2);
