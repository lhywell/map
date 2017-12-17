/**
 * @param {string} [message] Optional message
 * @extends {Error}
 * @constructor
 * @private
 */
export default class IndexOutOfBoundsException extends Error {
  constructor (message) {
    super()
    this.message = message || ''
  }

  /**
   * @type {string}
   */
  static get name () { return 'IndexOutOfBoundsException' }
}
