
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
      Content.updateContent('search', search)
    }
  }
}

export default SearchBar
