// Mithilesh Pabba
// This is a script to display a recipe example

// Variables
var recipeName = "Schezwan Egg Rice";
var description = "A delicious blend of schezwan sauce with egg fried rice.";
var ingredient = 6;
var calories = 50;
var vegetarian = false;

// Arithmetic Operation
var totalCalories = ingredient * calories;

// Selecting HTML Elements
var recipeNameElement = document.getElementById("recipeName");
var descriptionElement = document.getElementsByTagName("p")[1];
var totalCaloriesElement = document.getElementsByClassName("totalCalories")[0];
var vegetarianElement = document.querySelector(".vegetarian");

// Updating Text & Markup
recipeNameElement.textContent = recipeName;
descriptionElement.textContent = description;
totalCaloriesElement.innerHTML = "<em>Total</em> Calories: " + totalCalories;
vegetarianElement.textContent = "Vegetarian: " + vegetarian;