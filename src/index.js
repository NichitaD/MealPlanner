import App from './app'
import '@babel/polyfill'
import menu_button from './images/menu.png'

const $body = document.getElementsByTagName('body')[0]

$body.onload = () => {
  const app = new App()
  const $container = document.getElementById('app')
  app.run($container)
}
