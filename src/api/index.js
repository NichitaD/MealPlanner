const API_URL = 'https://www.themealdb.com/api/json/v1/1'

class API {
  async getRandomMeal () {
    // document.getElementById('search').value = ''
    try {
      const response = await fetch(
        `${API_URL}/random.php`
      )
      const data = await response.json()
      return (data.meals[0])
    } catch (e) {
      console.log('Error is: ' + e)
      return null
    }
  }

  async getMealsBySearch (search) {
    const response = await fetch(
      `${API_URL}/search.php?s=${search}`
    )
    const data = await response.json()
    const random = Math.floor(Math.random() * data.meals.length)
    return data.meals[random]
  }

  async getMealsByName (name) {
    const response = await fetch(
      `${API_URL}/search.php?s=${name}`
    )
    const data = await response.json()
    return data.meals[0]
  }

  async getCategories () {
    try {
      const response = await fetch(
        `${API_URL}/categories.php`
      )
      const data = await response.json()
      return data.categories
    } catch (e) {
      console.log('Error is: ' + e)
      return null
    }
  }

  async getMealsByCategory (category) {
    try {
      const response = await fetch(
        `${API_URL}/filter.php?c=${event.target.innerHTML}`
      )
      const data = await response.json()
      return data.meals
    } catch (e) {
      console.log('Error is: ' + e)
      return null
    }
  }
}

export default API
