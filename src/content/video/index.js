import M from 'mustache'

import template from './index.html'
import './index.css'
import button from '../../images/close_light.png'

class Video {
  render (video) {
    const html = M.render(template, {
      videoSource: video,
      buttonSource: button
    })
    return html
  }

  static playVideo () {
    console.log('called')
    const video = document.getElementById('video_window')
    video.classList.add('showWindow')
  }

  static closeWindow () {
    const video = document.getElementById('video_window')
    document.getElementById('video_window').classList.add('hideWindow')
    video.classList.remove('showWindow')
    var iframes = document.getElementsByTagName('iframe')
    if (iframes != null) iframes[0].src = iframes[0].src
  }
}

export default Video
