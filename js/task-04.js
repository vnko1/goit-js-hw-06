const valueEl = document.querySelector("#value");
const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

const incrementValue = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

const decrementValue = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

incrementBtn.addEventListener("click", incrementValue);

decrementBtn.addEventListener("click", decrementValue);
