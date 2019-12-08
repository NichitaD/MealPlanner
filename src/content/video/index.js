import M from 'mustache'

import template from './index.html'
import './index.css'
import button from '../../images/close_light.png'

class Video {
  render(video) {
    const html = M.render(template, {
      videoSource: video,
      buttonSource: button
    })
    return html;
  }
}

export default Video