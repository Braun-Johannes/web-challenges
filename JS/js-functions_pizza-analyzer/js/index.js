console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
  const pizzaSize1 = Number(pizzaInput1.value);
  const pizzaSize2 = Number(pizzaInput2.value);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  const newFirstPizza = Number(pizzaInput1.value);
  updatePizzaDisplay(pizza1, newFirstPizza);
  const size1 = Number(pizzaInput1.value);
  const size2 = Number(pizzaInput2.value);
  updateOutputColor(size1, size2);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  const pizzaSize1 = Number(pizzaInput1.value);
  const pizzaSize2 = Number(pizzaInput2.value);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  const newSecondPizza = Number(pizzaInput2.value);
  updatePizzaDisplay(pizza2, newSecondPizza);
  const size1 = Number(pizzaInput1.value);
  const size2 = Number(pizzaInput2.value);
  updateOutputColor(size1, size2);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  const radius1 = diameter1 / 2;
  const radius2 = diameter2 / 2;
  const area1 = Math.PI * (radius1 * radius1);
  const area2 = Math.PI * (radius2 * radius2);
  const calculatedValue = ((area2 - area1) / area1) * 100;
  output.textContent = Math.round(calculatedValue);
}

// Task 2
// define the function updatePizzaDisplay here

function updatePizzaDisplay(pizzaElement, newSize) {
  const newWidth = (newSize / 24) * 100;
  pizzaElement.style.width = newWidth + "px";
}

// Task 3
// define the function updateOutputColor here

function updateOutputColor(size1, size2) {
  outputSection.style.backgroundColor =
    size1 > size2 ? "var(--red)" : "var(--green)";
}
