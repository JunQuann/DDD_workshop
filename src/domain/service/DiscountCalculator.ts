import { Price, Currency } from "../Price";

export class DiscountCalculator {
  static competitorPriceList: Record<string, Price> = {
    "Ipad Pro": new Price(999, Currency.SGD),
    "Hero Ink Pen": new Price(59, Currency.SGD),
    "GM Cricket bat": new Price(199, Currency.SGD),
  };

  private discountPercentage: number;

  constructor(discountPercentage: number) {
    this.discountPercentage = discountPercentage;
  }

  calculateDiscount(productName: string): Price {
    const competitorProductPrice =
      DiscountCalculator.competitorPriceList[productName];
    return new Price(
      competitorProductPrice.amount * (1 - this.discountPercentage),
      competitorProductPrice.currency
    );
  }
}
