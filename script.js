const dropdown = document.getElementById('recipe-dropdown');
const viewBtn = document.getElementById('view-recipe-btn');
const recipeDetails = document.getElementById('recipe-details');
const recipes= {
    Salad: "Salad", 
    Pasta: "Pasta"
};

viewBtn.addEventListener("click", function () {
const selectedRecipe = dropdown.value;

if (!selectedRecipe) {
recipeDetails.textContent = "Please choose a recipe first.";
return;
}

recipeDetails.textContent = recipe[selectedRecipe] || "Recipe not found.";
});