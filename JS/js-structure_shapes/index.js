import { getRandomColor } from "./utils/randomColor.js";

console.clear();

const root = document.getElementById("root");

const classNames = ["circle", "square", "pentagon"];

function Shape(className) {
  const all = document.createElement("className");
  all.classList.add("??");
  all.addEventListener("click", () => {
    all.style.backgroundColor = getRandomColor();
  });
  return all;
}

classNames.forEach((className) => {
  root.append(Shape(className));
});
// const circle = document.createElement("div");
// circle.classList.add("circle");
// circle.addEventListener("click", () => {
//   circle.style.backgroundColor = getRandomColor();
// });

// const square = document.createElement("div");
// square.classList.add("square");
// square.addEventListener("click", () => {
//   square.style.backgroundColor = getRandomColor();
// });

// const pentagon = document.createElement("div");
// pentagon.classList.add("pentagon");
// pentagon.addEventListener("click", () => {
//   pentagon.style.backgroundColor = getRandomColor();
// });

// root.append(circle, square, pentagon);

// root.append(Shape("circle"), Shape("pentagon"), Shape("square"));
