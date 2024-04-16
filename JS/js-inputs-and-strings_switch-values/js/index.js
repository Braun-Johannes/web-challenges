/*

Switch the input values of the two input fields when clicking the button

- [ ] Add a second input element to the index.html
- [ ] Assign the second input element to a variable
- [ ] Add a third button (a switch button) to the index.html
- [ ] Assign the third button to a variable
- [ ] Make sure that when the switch button is clicked, the values of the 
      two input fields are being switched
- [ ] Make sure that all three buttons work on both input fields

Hint: the HTML entity for the switch button is: &updownarrow

*/

const firstInput = document.querySelector('[data-js="first-input"]');
const secondInput = document.querySelector('[data-js="second-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');
const switchcaseButton = document.querySelector(
  '[data-js="button-switchcase"]'
);

uppercaseButton.addEventListener("click", function () {
  firstInput.value = firstInput.value.toUpperCase();
  secondInput.value = secondInput.value.toUpperCase();

  // const firstInputValue = firstInput.value;
  // const firstUppercaseValue = firstInputValue.toUpperCase();

  // firstInput.value = firstUppercaseValue;

  // const secondInputValue = secondInput.value;
  // const secondUppercaseValue = secondInputValue.toUpperCase();

  // secondInput.value = secondUppercaseValue;
});

lowercaseButton.addEventListener("click", () => {
  firstInput.value = firstInput.value.toLowerCase();
  secondInput.value = secondInput.value.toLowerCase();

  // const firstInputValue = firstInput.value;
  // const firstLowercaseValue = firstInputValue.toLowerCase();

  // firstInput.value = firstLowercaseValue;

  // const secondInputValue = secondInput.value;
  // const secondLowercaseValue = secondInputValue.toLowerCase();

  // secondInput.value = secondLowercaseValue;
});

switchcaseButton.addEventListener("click", () => {
  const swapFirstInput = firstInput.value;
  const swapSecondInput = secondInput.value;

  firstInput.value = swapSecondInput;
  secondInput.value = swapFirstInput;
});
