
// CSS & HTML
import template from './index.html'
import './index.css'

class Toggle {
  constructor () {
    this.color = 'light'
  }

  render () {
    const html = template
    return html
  }

  static changeTheme (style) {
    const element = style
    if (this.color == 'light' || this.color == undefined) {
      setTimeout(function () {
        document.getElementById('button').innerHTML = 'GET MEAL 🌮'
      }, 250)
      element.setProperty('--background-color', '#3d3d3d')
      element.setProperty('--title-color', 'white')
      element.setProperty('--h5-color', 'white')
      element.setProperty('--p-color', 'white')
      element.setProperty('--list-color', 'white')
      element.setProperty('--search-bar', '#5e5e5e')
      element.setProperty('--shadow', '#5e5e5e')
      document.getElementById('close_button').src = '../image/close_dark.png'
      this.color = 'dark'
    } else {
      setTimeout(function () {
        document.getElementById('button').innerHTML = 'GET MEAL 🍔'
      }, 250)
      element.setProperty('--background-color', 'white')
      element.setProperty('--title-color', 'black')
      element.setProperty('--h5-color', '#4f4f4f')
      element.setProperty('--p-color', '#545454')
      element.setProperty('--list-color', '#6b6b6b')
      element.setProperty('--search-bar', 'white')
      element.setProperty('--shadow', 'rgba(0, 0, 0, 0.19)')
      document.getElementById('close_button').src = '../image/close_light.png'
      this.color = 'light'
    }
  }
}

export default Toggle
