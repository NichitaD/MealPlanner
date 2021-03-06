import M from 'mustache'

// components
import Header from '../header'
import Content from '../content'
import Toggle from '../header/topBar/themeToggle'
import Search from '../header/topBar/search'
import MenuButton from '../header/topBar/menuButton'
import Menu from '../header/topBar/menuButton/menu'
import Video from '../content/recepyVideo'

// css & html
import template from './index.html'
import './index.css'

class App {
  async render ($container) {
    const html = M.render(template, {}, {
      header: await new Header().render(),
      content: await Content.updateContent('init')
    })
    $container.innerHTML = html
    document.getElementById('button').addEventListener('click', function () { Content.updateContent('random') })
    document.getElementById('switch').addEventListener('change', function () { Toggle.changeTheme(document.documentElement.style) })
    document
      .querySelector('#search')
      .addEventListener('keypress', key => Search.search(key, document.getElementById('main')))
    document.getElementById('menu').addEventListener('click', MenuButton.toggleMenu)
    document.getElementById('play_button').addEventListener('click', Video.playVideo)
    document.getElementById('play_button_mob').addEventListener('click', Video.playVideo)
    document.getElementById('close').addEventListener('click', Video.closeWindow)
    Menu.setEventListeners()
  }

  async run ($parent) {
    this.render($parent)
  }
}

window.onclick = function (event) {
  const video = document.getElementById('video_window')
  if (event.target === video) {
    document.getElementById('video_window').classList.add('hideWindow')
    video.classList.remove('showWindow')
    var iframes = document.getElementsByTagName('iframe')
    if (iframes != null) { // Reseting video by reasigning the source
      const videoSource = iframes[0].src
      iframes[0].src = videoSource
    }
  } else if (document.getElementById('menu_content').style.opacity === '1') {
    if (event.target.classList[0] !== 'category') {
      MenuButton.toggleMenu()
    }
  } else {
    document.getElementById('search').value = ''
  }
}

export default App
