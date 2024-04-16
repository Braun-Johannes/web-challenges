console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;
  const numberOne = parseFloat(event.target.elements.numberA.value);
  const numberTwo = parseFloat(event.target.elements.numberB.value);
  const operation = event.target.elements.operator.value;

  if (operation === "addition") {
    result = add(numberOne, numberTwo);
    // result = numberOne + numberTwo
  } else if (operation === "subtraction") {
    result = subtract(numberOne, numberTwo);
  } else if (operation === "multiplication") {
    result = multiply(numberOne, numberTwo);
  } else if (operation === "division") {
    result = divide(numberOne, numberTwo);
  }
  // } else {
  //   result = "Error: Division by zero";
  // } else {
  //   result = "Error: Invalid operation";
  // }

  // --v-- write your code here --v--

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
