console.log(
  "Number of categories: ",
  document.querySelectorAll(".item").length
);

const categories = document.querySelectorAll(".item");

for (const category of categories) {
  console.log("Category: ", category.querySelector("h2").textContent);
  console.log("Elements: ", category.querySelectorAll("li").length);
}
