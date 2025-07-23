async function fetchRecipes () {
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";

    try {
        const response = await fetch(url)
        const data = await response.json()
        const meals = data.meals
        displayRecipes(meals)
         
    } catch (error) {
        console.log('Error fetching Recipes:', error);
    }
}


function displayRecipes(recipes)  {
    const container = document.querySelector('.container')
    container.innerHTML = "";


    recipes.forEach(recipe => {
        const card = document.createElement('div')
        card.classList.add("recipe-card")


         const title = document.createElement('h1')
         title.textContent = recipe.strMeal

         const content = document.createElement("div")
         content.classList.add('content')

        const description = document.createElement('p')

        description.textContent = recipe.strInstructions.slice(0, 130)  +"...";
         const image = document.createElement('img')

         const actions = document.createElement('div')
         actions.classList.add('actions')
         image.src = recipe.strMealThumb
         image.alt = recipe.strMeal

         const link = document.createElement('a')
         link.href = recipe.strSource || "#";

         link.textContent = "View Recipe"
         link.target = "_blank";

         card.appendChild(image)
         card.appendChild(title)
         card.appendChild(description)
         card.appendChild(actions)
         card.appendChild(link)
         card.appendChild(content)
         container.appendChild(card)
     
})

}

window.addEventListener("DOMContentLoaded", fetchRecipes)