const API_URL = 'https://www.themealdb.com/api/json/v1/1'

const getRandomMeal = async () => {
  document.getElementById('search').value = ''
  try {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    )
    const data = await response.json()
    return (data.meals[0])
  } catch (e) {
    console.log('Error is: ' + e)
    return null
  }
}

const getCategories = async () => {
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

const getMealsByCategory = async (category) => {
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
