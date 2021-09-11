export enum Currency {
  SGD = "SGD",
  THB = "THB",
  USD = "USD",
}

export class Price {
  private _amount: number;
  private _currency: Currency;

  constructor(amount: number, currency: Currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount(): number {
    return this._amount;
  }

  get currency(): Currency {
    return this._currency;
  }

  toString(): string {
    return `${this._amount} ${this._currency}`;
  }
}
