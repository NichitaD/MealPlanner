import M from 'mustache'

// Components
import Button from './button'
import Menu from './topBar/menuButton/menu'
import TopBar from './topBar'
import Text from './text'

// CSS & HTML
import template from './index.html'
import './index.css'

class Header {
  async render () {
    const html = M.render(template, {}, {
      topBar: new TopBar().render(),
      menu: await new Menu().render(),
      text: new Text().render(),
      button: new Button().render()
    })
    return html
  }
}

export default Header
