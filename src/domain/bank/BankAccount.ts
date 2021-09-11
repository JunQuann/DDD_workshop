import { uuid } from "uuidv4";
import { Address } from "./Address";

export class BankAccount {
  private _id: string;
  private _address: Address;

  constructor(address: Address) {
    this._id = uuid();
    this._address = address;
  }

  get address() {
    return this._address;
  }

  updateAddress(address: Address): void {
    this._address = address;
  }
}
