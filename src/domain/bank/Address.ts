export class Address {
  private _city: string;

  constructor(city: string) {
    this._city = city;
  }

  get city() {
    return this._city;
  }
}
