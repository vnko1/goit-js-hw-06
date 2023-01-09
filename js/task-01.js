console.log(
  "Number of categories: ",
  document.querySelectorAll(".item").length
);

const categories = document.querySelectorAll(".item");

for (const element of categories) {
  console.log("Category: ", element.querySelector("h2").textContent);
  console.log("Elements: ", element.querySelectorAll("li").length);
}
