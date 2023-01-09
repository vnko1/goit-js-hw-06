console.log(
  "Number of categories: ",
  document.querySelectorAll(".item").length
);

document.querySelectorAll(".item").forEach((category) => {
  console.log("Category: ", category.querySelector("h2").textContent);
  console.log("Elements: ", category.querySelectorAll("li").length);
});
