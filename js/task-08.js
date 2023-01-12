const formEl = document.querySelector(".login-form");

const formData = [];

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" && password.value === "") {
    return alert("Всі поля мають бути заповнені");
  }

  const obj = {};
  obj[email.getAttribute("name")] = email.value;
  obj[password.getAttribute("name")] = password.value;
  formData.push(obj);
  console.log(formData);
  event.currentTarget.reset();
}
