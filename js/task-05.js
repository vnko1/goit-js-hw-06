// const textInput = document.querySelector("#name-input");
// const textOutput = document.querySelector("#name-output");

// textInput.addEventListener("input", (event) => {

//   event.currentTarget.value === ""
//     ? (textOutput.textContent = "Anonymous")
//     : (textOutput.textContent = event.currentTarget.value);
// });

const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", _.debounce(onInputData, 250));

function onInputData(event) {
  event.target.value === ""
    ? (textOutput.textContent = "Anonymous")
    : (textOutput.textContent = event.target.value);
}
