const API_URL = 'https://www.themealdb.com/api/json/v1/1'

class API {
  async getRandomMeal() {
    // document.getElementById('search').value = ''
    try {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/random.php'
      )
      const data = await response.json()
      console.log(data.meals[0])
      return (data.meals[0])
    } catch (e) {
      console.log('Error is: ' + e)
      return null
    }
  }
  
  async getCategories() {
    try {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/categories.php'
      )
      const data = await response.json()
      return data.categories
    } catch (e) {
      console.log('Error is: ' + e)
      return null
    }
  }
  
  async getMealsByCategory(category) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${event.target.innerHTML}`
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


