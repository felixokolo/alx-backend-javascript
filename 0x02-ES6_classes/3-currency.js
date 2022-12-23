/**
 * Currency class
 */

export default class Currency {
  /**
     * Constructor for currency class
     * @param {String} code - currency code
     * @param {String} name - currency name
     */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('Code must be string');
    }
    this._code = newCode;
  }

  get code() {
    return this._code;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be string');
    }
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
