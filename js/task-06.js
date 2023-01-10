const textInput = document.querySelector("#validation-input");

console.log(textInput.value);

textInput.addEventListener("blur", () => {
  textInput.value.length == textInput.dataset.length
    ? textInput.classList.add("valid")
    : textInput.classList.add("invalid");
});
