const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  event.currentTarget.value === ""
    ? (textOutput.textContent = "Anonymous")
    : (textOutput.textContent = event.currentTarget.value);
});
