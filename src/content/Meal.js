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

export default Meal
