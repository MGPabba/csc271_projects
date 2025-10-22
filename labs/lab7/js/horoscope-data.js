var sign = "Gemini";
var birthMonth = "May";
var birthday = 30;
var luckyNumber = 5.5;
var description = "Gemini is known as a positive, mutable sign."
var belief = false;
var mood = 4.5;
var partner1Mood = 4.0;
var partner2Mood = 3.5;
var averageMood = (mood + partner1Mood + partner2Mood) / 3;

document.getElementById("sign").textContent = sign;
document.getElementsByClassName("birthday")[0].textContent += birthMonth + " " + birthday;
document.getElementsByClassName("luckyNum")[0].textContent += luckyNumber;
document.querySelectorAll("p")[0].textContent = description;
document.querySelectorAll("p")[1].innerHTML += "<strong>" + belief + "</strong>";
document.querySelectorAll("p")[2].textContent = "Today's mood rating for Gemini: " + mood + ". The average mood rating of Gemini, Gemini, and Aquarius is: " + averageMood + ".";


var signs = [ "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];
var mySign = signs[5];
var partner1Sign = signs[5];
var partner2Sign = signs[1];

document.querySelectorAll("p")[3].textContent = "My zodiac sign is: " + mySign + "."
document.querySelectorAll("p")[4].textContent = "Angel zodiac sign is: " + partner1Sign + "."
document.querySelectorAll("p")[5].textContent = "Nick zodiac sign is: " + partner2Sign + "."


var descriptions = ["Today is a day for new beginnings. Embrace change and seize opportunities.",
  "Your determination will lead to success today. Stay focused on your goals.",
  "Communication is key today. Express yourself clearly and listen to others.",
  "Trust your intuition. It will guide you in making the right decisions.",
  "Your creativity shines today. Use it to inspire and lead others.",
  "Pay attention to the details. Your meticulous work will pay off.",
  "Balance is essential. Find harmony in all aspects of your life.",
  "Embrace transformation. Let go of what no longer serves you.",
  "Adventure awaits. Explore new horizons and expand your horizons.",
  "Hard work leads to success. Keep pushing toward your goals.",
  "Your unique perspective is an asset. Share your ideas with others.",
  "Trust your emotions. They will guide you in making the right choices."]
var myDescription = descriptions[5];
var partner1Description = descriptions[5];
var partner2Description = descriptions[1];

document.querySelectorAll("p")[6].textContent = "My description is: " + myDescription
document.querySelectorAll("p")[7].textContent = "Angel description is: " + partner1Description
document.querySelectorAll("p")[8].textContent = "Nick description is: " + partner2Description