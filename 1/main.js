function generateRandomText() {
  const randomText = Math.random().toString(36).substring(2, 15);
  return randomText;
}


document.getElementById("myButton").addEventListener("click", function() {
  const divElement = document.getElementById("myDiv");
  divElement.style.display = "none";
});

const divElement = document.getElementById("myDiv");
divElement.innerText = generateRandomText();