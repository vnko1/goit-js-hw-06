function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyRef = document.querySelector("body");
const btnSetColorRef = bodyRef.querySelector(".change-color");
const colorValueRef = bodyRef.querySelector(".color");

btnSetColorRef.addEventListener("click", changeColor);

function changeColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorValueRef.textContent = bodyRef.style.backgroundColor;
}
