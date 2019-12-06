import M from 'mustache'

import template from './index.html'
import './index.css'
import { Meal } from '../index.js'

class Image {
  render () {
    const html = M.render(template, {
      source: new Meal().getImage()
    })
    return html
  }
}

export default Image
