/**
 * Building class
 */

export default class Building {
  /**
   * Implementation of building class
   * @param {Number} sqft - Building area in square feet
   */
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw new TypeError('Sqft must be number');
    }
    this._sqft = newSqft;
  }

  get sqft() {
    return this._sqft;
  }
}
