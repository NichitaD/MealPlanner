import M from 'mustache'

import template from './index.html'
import './index.css'

import Meal from '../index.js'

class Text {
  render () {
    const text = Meal.getText()
    const html = M.render(template, {
      title: text.title,
      category: text.category,
      tags: text.tags,
      instructions: text.instructions,
      ingredients: text.ingredients
    })
    return html
  }
}

export default { Text }
