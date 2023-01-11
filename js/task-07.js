const inputEl = document.getElementById("font-size-control");
const outputEl = document.getElementById("text");
outputEl.style.fontSize = `${inputEl.value}px`;
inputEl.addEventListener("input", (event) => {
  outputEl.style.fontSize = `${event.currentTarget.value}px`;
});
