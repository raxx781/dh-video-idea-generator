const ideas = [

"Doing the USH on strangers (reaction compilation)",
"Letting subscribers control my day for 24 hours",
"Trying the weirdest foods on DoorDash",
"Calling my friends and asking crazy questions",
"Reacting to my oldest YouTube videos",
"Giving strangers $20 if they survive the USH",
"Trying viral TikTok life hacks",
"24 hours saying YES to everything",
"Letting my friends plan my entire day",
"Reading the funniest comments on my videos",
"Trying to go a full day without saying USH",
"Turning my comments into real life challenges",
"Pranking my friends with the USH",
"Testing weird products from the internet",
"Rating the worst fast food items"

];

function generateIdea(){
const random = Math.floor(Math.random() * ideas.length);
document.getElementById("idea").innerText = ideas[random];
}
