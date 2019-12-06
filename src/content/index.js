import M from 'mustache'

import template from './index.html'
import './index.css'

import Image from './image'
import Video from './video'
import Text from './text'

class Content {
  render () {
    const html = M.render(template, {
      image: new Image().render(),
      text: new Text().render(),
      video: new Video().render()
    })
    return html
  }
}

class Meal {
  constructor (meal) {
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
    this.video = meal.strYoutube
    this.category = meal.strCategory
    this.instructions = meal.strInstructions
    this.ingredients = listString
    if (meal.strTags != null) {
      document.getElementById('tags').innerHTML = meal.strTags.replace(
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
      ingredient: this.ingredients
    }
  }

  getVideo () {
    return this.video
  }

  getImage () {
    return this.image
  }
}

export { Meal, Content }
