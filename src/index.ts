import { Cart } from "./domain/Cart";
import { CartItem } from "./domain/CartItem";
import { Product } from "./domain/Product";

const cart = new Cart();
const cart2 = new Cart();

const iPadPro = new Product("Ipad Pro");
const heroInkPen = new Product("Hero Ink Pen");
const gmCricketBat = new Product("GM Cricket bat");

cart.add(new CartItem(iPadPro, 1));
cart.add(new CartItem(heroInkPen, 1));
cart.add(new CartItem(gmCricketBat, 2));

cart2.add(new CartItem(iPadPro, 1));
cart2.add(new CartItem(heroInkPen, 1));
cart2.add(new CartItem(gmCricketBat, 2));

console.log(cart);
console.log(cart2);
