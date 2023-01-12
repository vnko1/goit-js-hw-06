const controlsRef = document.getElementById("controls");
const inputRef = controlsRef.firstElementChild;
const onCreateBtn = controlsRef.querySelector("[data-create]");
const onDestroyBtn = controlsRef.querySelector("[data-destroy]");
const boxesRef = document.getElementById("boxes");

let outputValue;

inputRef.addEventListener("input", (event) => {
  outputValue = event.currentTarget.value;
});

onCreateBtn.addEventListener("click", () =>
  boxesRef.append(...createBoxes(outputValue))
);

onDestroyBtn.addEventListener("click", destroyBoxes);

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

function destroyBoxes() {
  boxesRef.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
