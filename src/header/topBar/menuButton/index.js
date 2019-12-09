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
    return html
  }

  static async toggleMenu () {
    const menu = document.getElementById('menu_content')
    if (menu.style.opacity === '0') {
      console.log('called')
      menu.style.display = 'block'
      setTimeout(function () {
        menu.style.opacity = 1
      }, 100)
    } else {
      menu.style.opacity = '0'
      document.getElementById('second_menu').style.opacity = '0'
      setTimeout(function () {
        menu.style.display = 'none'
        document.getElementById('second_menu').style.display = 'none'
      }, 100)
    }
  }
}

export default MenuButton
