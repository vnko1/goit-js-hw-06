let counterValue = 23;
const counterEl = document.querySelector("#counter");
const valueEl = document.querySelector("#value");

const buttonDecrement = counterEl.querySelector(
  "button[data-action='decrement']"
);
buttonDecrement.addEventListener("click", () => {
  return (counterValue -= 1);
});
console.log(counterValue);
console.log(counterValue);
const buttonIncrement = counterEl.querySelector(
  "button[data-action='increment']"
);
buttonDecrement.addEventListener("click", () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
valueEl.textContent = `${counterValue}`;
