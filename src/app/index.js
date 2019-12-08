import M from 'mustache'

// components
import Header from '../header'
import  Content  from '../content'

// css & html
import template from './index.html'
import './index.css'

class App {
  async render ($container) {
    const html = M.render(template, {}, {
      header:  new Header().render(),
      content: await new Content().render()
    })
    $container.innerHTML =  html
    document.getElementById('button').addEventListener('click', this.changeContent)
  }

  async changeContent(){
    document.getElementById('main').innerHTML = await new Content().render();
  }

  async run ($parent) {
    this.render($parent)
  }
}

export default App
