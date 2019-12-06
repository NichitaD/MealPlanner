import M from 'mustache'

// components
import Header from '../header'
import { Content } from '../content'

// css & html
import template from './index.html'
import './index.css'

class App {
  render ($container) {
    const html = M.render(template, {}, {
      header: new Header().render(),
      content: new Content().render()

    })

    $container.innerHTML = html
  }

  async run ($parent) {
    this.render($parent)
  }
}

export default App
