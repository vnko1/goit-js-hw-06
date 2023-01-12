const formEl = document.querySelector(".login-form");

const formData = [];

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  const data = {};
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" && password.value === "") {
    return alert("Всі поля мають бути заповнені");
  }

  data[email.getAttribute("name")] = email.value;
  data[password.getAttribute("name")] = password.value;

  formData.push(data);
  console.log(formData);
  event.currentTarget.reset();
}
