const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" && password.value === "") {
    return alert("Всі поля мають бути заповнені");
  }

  console.log({
    [email.getAttribute("name")]: email.value,
    [password.getAttribute("name")]: password.value,
  });

  event.currentTarget.reset();
}

// -------------II----------------------

// const formEl = document.querySelector(".login-form");

// const formData = [];

// formEl.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (email.value === "" && password.value === "") {
//     return alert("Всі поля мають бути заповнені");
//   }

//   formData.push({
//     [email.getAttribute("name")]: email.value,
//     [password.getAttribute("name")]: password.value,
//   });
//   console.log(formData);
//   event.currentTarget.reset();
// }
