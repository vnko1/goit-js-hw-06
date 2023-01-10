const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryEl = document.querySelector(".gallery");
galleryEl.style.display = "flex";
galleryEl.style.listStyle = "none";
galleryEl.style.padding = 0;
galleryEl.style.gap = "20px";
// 1 варіант
const markup = (images) =>
  images
    .map(
      ({ url, alt }) =>
        `<li><img src ='${url}' alt = '${alt}' width = '400' height = '300'></li>`
    )
    .join("");
galleryEl.insertAdjacentHTML("beforeend", markup(images));

// 2 варіант

// const markupBySpread = (images) =>
//   images.map(
//     ({ url, alt }) =>
//       `<li><img src ='${url}' alt = '${alt}' width = '400' height = '300'></li>`
//   );
// galleryEl.insertAdjacentHTML("beforeend", ...markupBySpread(images));
