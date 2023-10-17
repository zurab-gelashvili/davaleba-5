
const cardDiv = document.createElement("div");
cardDiv.setAttribute("id", "card");


const h2Element = document.createElement("h2");
h2Element.textContent = "Gandalf";

const aElement = document.createElement("a");
aElement.setAttribute("href", "#");
aElement.textContent = "Go to profile";


cardDiv.appendChild(h2Element);
cardDiv.appendChild(aElement);


document.body.appendChild(cardDiv);
