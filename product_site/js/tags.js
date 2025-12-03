// Mithilesh Pabba
// This is a script to display a search example

var vegan = true;
var allergyFree = false;
var lowCalorie = true;
var tag = "";
var category = "";

// Decisions
if (vegan === true) {
    tag = "Vegan";
    category = "Vegan Recipes";
} else if (lowCalorie === true && allergyFree === true) {
    tag = "Low-Calorie and Allergy-Free";
    category = "Low-Calorie Allergy-Free Recipes";
} else if (allergyFree === true) {
    tag = "Allergy-Free";
    category = "Allergy-Free Recipes";
} else {
    category = "General Recipes";
}
document.getElementById("choosingTag").textContent = "Tag Chosen: " + tag;
document.getElementById("categoryFood").textContent = "Category of Foods Shown: " + category;

// Integrating A For Loop
// This for loop iterates through an array of tag names and creates a list
// I choose a for loop because it is useful for iterating through an array
var tags = ["Vegan", "Allergy-Free", "Low-Calorie"];
var tagsList = "";
for (var i = 0; i < tags.length; i++) {
    tagsList += "<li>" + tags[i] + "</li>";
}
document.getElementById("tagsList").innerHTML = "<ul>" + tagsList + "</ul>";

// Integrating A While Loop
// This while loop counts down from 3 to 1 for some fancy effect
// I choose a while loop because it can be used for a specific condition
var count = 3;
var text = "";
while (count > 0) {
    text += "Bringing up recipes in " + count + "<br>";
    count--;
}
document.getElementById("countdown").innerHTML = text;

// Looping Through A Nodelist
var h = document.querySelectorAll("h2");

if (h.length > 0) {
    for (var j = 0; j < h.length; j++) {
        h[j].style.fontSize = "22px";
    }
}