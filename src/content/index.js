import M from 'mustache'

import template from './index.html'
import './index.css'

import Image from './image'
import Video from './video'
import Text from './text'
import API from '../api/index.js'

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
        console.log('called')
        meal = new Meal(await new API().getMealsBySearch(search))
        break
      }

      case 'byName': {
        console.log(search)
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

class Meal {
  constructor (meal) {
    console.log(meal)
    let listString = ''
    for (let i = 1; i <= 20; ++i) {
      const name = `strIngredient${i}`
      if (meal[name] === '' || meal[name] === null) break
      const measure = `strMeasure${i}`
      const ingredient = ` ${meal[name].charAt(0).toUpperCase() +
            meal[name].substring(1)} - ${meal[measure]}`
      const fullHtml = `<li>${ingredient}</li> `
      listString += fullHtml
    }
    this.title = meal.strMeal
    this.image = meal.strMealThumb
    this.video = meal.strYoutube.replace(
      'watch?v=',
      'embed/'
    )
    this.category = meal.strCategory
    this.instructions = meal.strInstructions
    this.ingredients = listString
    if (meal.strTags != null) {
      this.tags = meal.strTags.replace(
        /,/g,
        ', '
      )
    }
  }

  getText () {
    return {
      title: this.title,
      category: this.category,
      tags: this.tags,
      instructions: this.instructions,
      ingredients: this.ingredients,
      image: this.image
    }
  }

  getVideo () {
    return this.video
  }

  getImage () {
    return this.image
  }
}

export default Content
