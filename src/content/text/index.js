import M from 'mustache'

import template from './index.html'
import './index.css'
import play from '../../images/play.png'


class Text {
  render (text) {
    const html = M.render(template, {
      title: text.title,
      category: text.category,
      tags: text.tags,
      instructions: text.instructions,
      image: text.image,
      button: play
    }, {
      ingredients: text.ingredients
    })
    console.log(text.ingredients)
    return html
  }
}

export default Text 
