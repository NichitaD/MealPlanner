import App from './app'
import '@babel/polyfill'

const $body = document.getElementsByTagName('body')[0]

$body.onload = () => {
  const app = new App()
  const $container = document.getElementById('app')
  app.run($container)
}
