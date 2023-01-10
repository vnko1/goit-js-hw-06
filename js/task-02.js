const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const indredientsListEl = document.querySelector("#ingredients");

function markingList(args) {
  return args.map((ingredient) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = ingredient;
    itemEl.classList.add("item");

    return itemEl;
  });
}

indredientsListEl.append(...markingList(ingredients));

//!-------------------------------------------------------------------------
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
