function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsRef = document.getElementById("controls");
const inputRef = document.getElementById("controls").firstElementChild;
const boxesRef = document.getElementById("boxes");

const inputValue = [];

inputRef.addEventListener("input", (event) => {
  console.log(createBoxes(event.currentTarget.value));
});

console.log(inputValue);
function createBoxes(amount) {
  const elSizeValue = [];
  for (let i = 30; i <= 30 + (amount - 1) * 10; i += 10) {
    elSizeValue.push(i);
  }
  return elSizeValue.map((el) => {
    const boxEl = document.createElement("div");
    boxEl.style.width = `${el}px`;
    boxEl.style.height = `${el}px`;
    boxEl.style.backgroundColor = getRandomHexColor();
    return boxEl;
  });
}
boxesRef.append(...createBoxes(5));
