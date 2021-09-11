import { Cart } from "./domain/Cart";
import { CartItem } from "./domain/CartItem";
import { DiscountCalculator } from "./domain/service/DiscountCalculator";
import { Product } from "./domain/Product";
import { CartCheckout } from "./domain/service/CartCheckout";

const discountCalculator = new DiscountCalculator(0.1);

const cart = new Cart();
const cart2 = new Cart();

const iPadPro = new Product(
  "Ipad Pro",
  discountCalculator.calculateDiscount("Ipad Pro"),
  400
);
const heroInkPen = new Product(
  "Hero Ink Pen",
  discountCalculator.calculateDiscount("Hero Ink Pen"),
  50
);
const gmCricketBat = new Product(
  "GM Cricket bat",
  discountCalculator.calculateDiscount("GM Cricket bat"),
  5000
);

cart.add(new CartItem(iPadPro, 1));
cart.add(new CartItem(heroInkPen, 1));
cart.add(new CartItem(gmCricketBat, 2));

cart2.add(new CartItem(iPadPro, 1));
cart2.add(new CartItem(heroInkPen, 1));
cart2.add(new CartItem(gmCricketBat, 2));

const order = CartCheckout.checkout(cart);

console.log(cart);
console.log(cart2);
console.log(order);
