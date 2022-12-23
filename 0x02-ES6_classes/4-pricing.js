/**
 * Pricing class
 */
import Currency from './3-currency';

export default class Pricing {
  /**
     * Implementation of pricing class
     * @param {Number} amount - Amount
     * @param {Currency} currency - Currency type
     */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be number');
    }
    this._amount = newAmount;
  }

  get amount() {
    return this._amount;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currency must be Currency');
    }
    this._currency = newCurrency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  /**
   * Static method for currency conversion
   * @param {Number} amount - Amount for conversion
   * @param {Number} conversionRate Coversion rate
   * @returns
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
