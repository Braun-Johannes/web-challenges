console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", (event) => {
  // Exercise: Append a new entry to the toast messages container
  event.preventDefault();
  const newCard = document.createElement("li");
  newCard.classList.add("toast-container__message");
  newCard.innerHTML = `
  I'm a toast message as well.
  `;
  toastContainer.append(newCard);
});

clearButton.addEventListener("click", (event) => {
  // Exercise: Clear the stack of toast messages
  event.preventDefault();
  const toastMessages = document.querySelectorAll(".toast-container__message");
  toastMessages.forEach((message) => {
    message.remove();
  });
});

// toastContainer.innerHTML="";
