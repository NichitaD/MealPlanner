import M from 'mustache'

// components
import MenuButton from './menuButton'
import SearchBar from './searchBar'
import Toggle from './toggle'

// css & html
import template from './index.html'
import './index.css'

class TopBar {
  render () {
    const html = M.render(template, {}, {
      menuButton: new MenuButton().render(),
      searchBar: new SearchBar().render(),
      toggle: new Toggle().render()
    })
    return html
  }
}
export default TopBar
