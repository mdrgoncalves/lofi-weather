const greetings = document.querySelector(".container-greet");
let color1, color2;

const greetColors = {
    "morning": ["#ffcd80", "#fcb64a"],
    "afternoon": ["#f9b3a6", "#c591b0"],
    "evening": ["#8468ff", "#785bf7"],
}

let timeNow = new Date().getHours;
timeNow = 20;

let timeGreet = 
    timeNow >= 5 && timeNow < 12 
    ? "Good Morning" 
    : timeNow >= 12 && timeNow < 18 
    ? "Good Afternoon"
    : "Good Evening";

if (timeGreet === "Good Morning") {
    color1 = greetColors.morning[0];
    color2 = greetColors.morning[1];
} else if (timeGreet === "Good Afternoon") {
    color1 = greetColors.afternoon[0];
    color2 = greetColors.afternoon[1];
} else {
    color1 = greetColors.evening[0];
    color2 = greetColors.evening[1];
}

greetings.style.background = 'linear-gradient(-240deg, ' + color1 + ' 70%, ' + color2 + ' 70%)'
greetings.innerHTML = `<h1>${timeGreet}</h1>`;