
// CSS & HTML
import template from './index.html'
import './index.css'

import Content from '../../../content'

class SearchBar {
  render () {
    const html = template
    return html
  }

  static async search (key, content) {
    if (key.key === 'Enter') {
      const search = document.getElementById('search').value
      content.innerHTML = await new Content().render('search', search)
    }
  }
}

export default SearchBar
