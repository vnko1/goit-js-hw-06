const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
//!---------------------1 вар----------------------------------------------------

// const ingredientsListEl = document.querySelector("#ingredients");

// const markingList = (arg) =>
//   arg.reduce((acc, el) => (acc += `<li class = 'item'>${el}</li>`), "");

// ingredientsListEl.insertAdjacentHTML("beforeend", markingList(ingredients));

//!---------------------2 вар----------------------------------------------------
const ingredientsListEl = document.querySelector("#ingredients");

function markingList(args) {
  return args.map((ingredient) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = ingredient;
    itemEl.classList.add("item");

    return itemEl;
  });
}

ingredientsListEl.append(...markingList(ingredients));

//!---------------------3 вар----------------------------------------------------
// const indredientsListEl = document.querySelector("#ingredients");

// function markingList(args) {
//   const arr = [];
//   for (let i = 0; i < args.length; i++) {
//     const itemEl = document.createElement("li");
//     itemEl.textContent = args[i];
//     itemEl.classList.add("item");
//     arr.push(itemEl);
//   }
//   return arr;
// }

// indredientsListEl.append(...markingList(ingredients));
