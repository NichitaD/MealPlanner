import M from 'mustache'

import template from './index.html'
import './index.css'

import button from '../../images/play.png'

class Image {
  render (imageSource) {
    const html = M.render(template, {
      img_source: imageSource,
      play_source: button
    })
    return html
  }
}

export default Image
