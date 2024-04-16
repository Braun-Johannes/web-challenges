console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const success = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideSuccess() {
  success.setAttribute("hidden", "");
}

function showSuccess() {
  success.removeAttribute("hidden");
}
hideSuccess();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (event.target.tos.checked) {
    alert("Form submitted");
    showSuccess();
  }
  // --^-- write your code here --^--
  // if (tosCheckbox.checked) {
  //   showSuccess();
  // }
  // eslint-disable-next-line no-alert
  event.target.reset();
});

tosCheckbox.addEventListener("input", () => {
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});
