import M from 'mustache'

import template from './index.html'
import './index.css'

import Image from './recepyImage'
import Video from './recepyVideo'
import Text from './recepyInstructions'
import API from '../api/index.js'
import Meal from './Meal'

class Content {
  static async render (meal) {
    const html = M.render(template, {}, {
      image: new Image().render(meal.getImage()),
      text: new Text().render(meal.getText()),
      video: new Video().render(meal.getVideo())
    })
    return html
  }

  static async updateContent (mealType = 'random', search) {
    let meal = ''
    switch (mealType) {
      case 'random': {
        meal = new Meal(await new API().getRandomMeal())
        break
      }
      case 'search': {
        meal = new Meal(await new API().getMealsBySearch(search))
        break
      }

      case 'byName': {
        meal = new Meal(await new API().getMealsByName(search))
        break
      }

      case 'init': {
        meal = new Meal(await new API().getRandomMeal())
        return Content.render(meal)
      }
    }
    document.getElementById('main').innerHTML = await Content.render(meal)
    document.getElementById('play_button').addEventListener('click', Video.playVideo)
    document.getElementById('close').addEventListener('click', Video.closeWindow)
    document.getElementById('play_button_mob').addEventListener('click', Video.playVideo)
  }
}

export default Content
