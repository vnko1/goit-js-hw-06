const bodyRef = document.querySelector("body");
const btnSetColorRef = bodyRef.querySelector(".change-color");
const colorValueRef = bodyRef.querySelector(".color");

btnSetColorRef.addEventListener("click", changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorValueRef.textContent = bodyRef.style.backgroundColor;
}
