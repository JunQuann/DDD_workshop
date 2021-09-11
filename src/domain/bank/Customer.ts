import { uuid } from "uuidv4";
import { Address } from "./Address";
import { BankAccount } from "./BankAccount";

export class Customer {
  private _id: string;
  private _bankAccounts: BankAccount[];
  private _address: Address;

  constructor(address: Address) {
    this._id = uuid();
    this._bankAccounts = [];
    this._address = address;
  }

  updateAddress(newAddress: Address) {
    this._address = newAddress;
    this._bankAccounts.forEach((bankAccount) => {
      bankAccount.updateAddress(newAddress);
    });
  }

  addBankAccount(bankAccount: BankAccount) {
    this._bankAccounts.push(bankAccount);
  }
}
