/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

1. On button click: The value of the first input field is copied into the second 
   input field

2. On button click: The value of the first input field is copied in uppercase 
   into the second input field

3. On button click: The values of the two input fields switch.

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const firstButton = document.querySelector("[data-js=first-button]");

const secondButton = document.querySelector("[data-js=second-button]");
const switchButton = document.querySelector("[data-js=switch-button]");

firstButton.addEventListener("click", () => {
  secondInput.value = secondInput.value + " " + firstInput.value;
  //   secondInput.value = `${secondInput.value} ${firstInput.value}`;
  //   secondInput.value = firstInput.value; (replace)
});

secondButton.addEventListener("click", () => {
  secondInput.value = secondInput.value + " " + firstInput.value.toUpperCase();
  //   secondInput.value = `${secondInput.value} ${firstInput.value}`;
  //   secondInput.value = firstInput.value; (replace)
});

switchButton.addEventListener("click", () => {
  const swapFirstInput = firstInput.value;
  const swapSecondInput = secondInput.value;

  firstInput.value = swapSecondInput;
  secondInput.value = swapFirstInput;
});
