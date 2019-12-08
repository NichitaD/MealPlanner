import M from 'mustache'

// components
import Header from '../header'
import  Content  from '../content'
import Button from '../header/button'
import Toggle from '../header/topBar/toggle'

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
    document.getElementById('button').addEventListener('click', function() {Button.changeContent(document.getElementById('main'))})
    document.getElementById('switch').addEventListener('change', function() {Toggle.changeTheme(document.documentElement.style)})
  }
  
  async run ($parent) {
    this.render($parent)
  }
}

export default App
