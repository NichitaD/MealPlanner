import M from 'mustache'
// CSS & HTML
import template from './index.html'
import './index.css'
import photo from '../../../images/menu.png'

class MenuButton {
  render () {
    const html = M.render(template, {
      source: photo
    })
    console.log(html)
    return html
  }
}

export default MenuButton
