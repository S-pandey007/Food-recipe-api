// let searchBox = document.querySelector(".searchBox")
// let searchBtn = document.querySelector(".searchBtn")
// let recipeContainer = document.querySelector(".recipe-container")

// async function fetchRecipe(para){
//     let recipe;
//     await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${para}`)
//     .then((response)=>{
//         return response.json()
//     }).then((data)=>{
//         // console.log(data.meals[0])
//         recipe = data
//     })
//     .catch((error)=>{
//         return error
//     })

//     return recipe
// }

// searchBtn.addEventListener("click", async function(e){
//     e.preventDefault()
//     const searchInput = searchBox.value.trim();
//     let data =await fetchRecipe(searchInput)
    
//     // console.log(data);
//     // data.meals.forEach(recipe => {
//     //     console.log(recipe)
//     // });

//     createRecipeDiv(data.meals)
// })

// function createRecipeDiv(data){
//     recipeContainer.innerHTML =""
//     data.forEach(recipe => {
//         // console.log(recipe)
//         let recipeDiv = document.createElement("div")
//         recipeDiv.classList.add("recipe")
//         recipeDiv.innerHTML=`
//         <img src="${recipe.strMealThumb}">
//         <h2>${recipe.strMeal}</h2>
//         <h3>${recipe.strArea}</h3>
//         <h3>${recipe.strCategory}</h3>
//         `
//         recipeContainer.appendChild(recipeDiv)
//     });
// }

