'use strict'

/**
 * Lausanne-Sport eSports API Source Code.
 *
 * @license GPLv3
 * @copyright Lausanne-Sport eSports - Romain Lanz
 */

const Model = use('Model')

class ArticleCategory extends Model {
  static boot () {
    super.boot()
    this.addTrait('NoTimestamp')
  }
}

module.exports = ArticleCategory
