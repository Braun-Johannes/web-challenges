console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log("data: ", data);

  const firstName = event.target.firstName.value;
  const age = event.target.age.value;
  const badness = event.target.badness.value;
  // data is stored in background and can be accesed after a reset by data.firstName
  const ageNumber = Number(age);
  const badnessNumber = Number(badness);
  const ageBadnessSum = ageNumber + badnessNumber;

  console.log("The age-badness-sum of " + firstName + " is " + ageBadnessSum);

  event.target.reset();
  event.target.elements.firstName.focus();
});
