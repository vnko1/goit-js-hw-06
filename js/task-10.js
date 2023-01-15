const controlsRef = document.getElementById("controls");
const inputRef = controlsRef.firstElementChild;
const onCreateBtn = controlsRef.querySelector("[data-create]");
const onDestroyBtn = controlsRef.querySelector("[data-destroy]");
const boxesRef = document.getElementById("boxes");

let outputValue;
let boxes;

inputRef.addEventListener("input", (event) => {
  outputValue = event.currentTarget.value;
});

onCreateBtn.addEventListener("click", () => {
  outputValue === undefined
    ? alert("Введіть дані")
    : boxesRef.append(...createBoxes(outputValue));
  boxes = boxesRef.querySelectorAll("div");
});

onDestroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const elSizeValue = [];

  if (boxes !== undefined) {
    const initialValue = Number.parseInt(boxes[boxes.length - 1].style.width);
    for (
      let i = initialValue + 10;
      i <= initialValue + 10 + (amount - 1) * 10;
      i += 10
    ) {
      elSizeValue.push(i);
    }
  } else {
    for (let i = 30; i <= 30 + (amount - 1) * 10; i += 10) {
      elSizeValue.push(i);
    }
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
  boxes = undefined;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
