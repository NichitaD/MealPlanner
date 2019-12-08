import M from 'mustache'

import template from './index.html'
import './index.css'

class Image {
  render (imageSource) {
    const html = M.render(template, {
      source: imageSource
    })
    return html
  }
}

export default Image
