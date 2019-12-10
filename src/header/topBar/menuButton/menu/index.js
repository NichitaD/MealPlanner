
import M from 'mustache'

import template from './index.html'
import './index.css'

import API from '../../../../api'
import Content from '../../../../content'

class Menu {
  async render () {
    const html = M.render(template, {}, {
      firstList: await this.renderList(await new API().getCategories())
    })
    return html
  }

  renderList (list) {
    let menuItems = ''
    for (const category of list) {
      menuItems += `<li class="category">${category.strCategory}</li>`
    }
    return menuItems
  }

  static setEventListeners (list = 'first') {
    if (list === 'first') {
      const listItems = document.getElementsByClassName('category')
      for (const item of listItems) {
        item.addEventListener('click', this.displayMeals)
      }
    } else {
      const listItems = document.getElementsByClassName('meal')
      for (const item of listItems) {
        item.addEventListener('click', function () { Content.updateContent('byName', event.target.innerHTML) })
      }
    }
  }

  static async displayMeals () {
    const meals = await new API().getMealsByCategory(event.target.innerHTML)
    let menuItems = ''
    for (const meal of meals) {
      menuItems += `<li class="meal">${meal.strMeal}</li>`
    }
    document.getElementById('second_list').innerHTML = menuItems
    const menu = document.getElementById('second_menu')
    menu.style.display = 'block'
    setTimeout(function () {
      menu.style.opacity = 1
    }, 100)
    Menu.setEventListeners('second')
  }
}

export default Menu
