const categoriesEl = document.getElementById("categories");
const itemEl = categoriesEl.querySelectorAll(".item");

console.log("Number of categories: ", categoriesEl.children.length);

itemEl.forEach((category) => {
  console.log("Category: ", category.firstElementChild.textContent);
  console.log("Elements: ", category.lastElementChild.children.length);
});
