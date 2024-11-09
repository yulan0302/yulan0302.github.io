let GroupOfCards = ["😃", "🍎", "👨‍👩‍👧‍👦", "🐶", "🐱", "🌳", "🏠", "💔"];

let totalCards = GroupOfCards.concat(GroupOfCards);

function distributeCards() {
let GameTable = document.querySelector("#GameTable");
GameTable.innerHTML = "";

totalCards.forEach(function(element) {
let card = document.createElement("div");
card.innerHTML = "<div class='card'><div class='card_content'>" + element + "</div></div>"; 
GameTable.appendChild(card);
});
}

function uncover(event) {
event.target.classList.add("uncover"); 
}

distributeCards();

document.querySelectorAll(".card").forEach(function(element) {
element.addEventListener("click", uncover);
});