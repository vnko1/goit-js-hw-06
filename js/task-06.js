const textInput = document.querySelector("#validation-input");

console.log(textInput.value);

textInput.addEventListener("blur", () => {
  if (String(textInput.value.length) === textInput.dataset.length) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
  }
});

console.log(String(textInput.value.length));
