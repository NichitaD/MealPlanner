
import template from './index.html'
import './index.css'

import Content from '../../content'

class Button {
  render () {
    return template
  }

  static async changeContent (content) {
    content.innerHTML = await new Content().render()
  }
}

export default Button
