function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getRandomSize(amount) {
  let defaultSizeValue = 0;
  for (let i = 30; i <= 30 + 10 * (amount - 1); i += 10) {}
}

const controlsRef = document.getElementById("controls");
const boxesRef = document.getElementById("boxes");

function createBoxes(amount) {
  const arr = [];
  for (let i = 1; i <= amount; i++) {
    const divEl = document.createElement("div");
    divEl.style.width = 30 + "px";
    divEl.style.height = 30 + "px";
    divEl.style.backgroundColor = getRandomHexColor();
    arr.push(divEl);
  }
  // console.log(arr);
  return arr;
}
// console.log(createBoxes(3));
const boxesEl = createBoxes(3);

const addStyle = boxesEl.map((el, index, array) => {
  console.log(el.style.width);
});
// const changeStyle = createBoxes(3).map((el) => {
//   // el.style.width+=;
// });
boxesRef.append(...createBoxes(3));
