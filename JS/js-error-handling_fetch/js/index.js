console.clear();

const userElement = document.querySelector(".user");

async function getUser(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    return json.data;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
}

// async function getUser(url) {
//   const response = await fetch(url);
//   const json = await response.json();
//   return json.data;
// }

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    try {
      const user = await getUser(event.target.dataset.url);
      userElement.innerHTML = `
      <h2>${user.first_name} ${user.last_name}</h2>
      <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
      `;
      userElement.classList.remove("error");
    } catch (error) {
      userElement.textContent = error.message;
      userElement.classList.add("error");
    }
  })
);

// Code before
// console.clear();

// const userElement = document.querySelector(".user");

// async function getUser(url) {
//   const response = await fetch(url);
//   const json = await response.json();
//   return json.data;
// }

// document.querySelectorAll("button[data-url]").forEach((button) =>
//   button.addEventListener("click", async (event) => {
//     const user = await getUser(event.target.dataset.url);
//     userElement.innerHTML = `
//     <h2>${user.first_name} ${user.last_name}</h2>
//     <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
//     `;
//   })
// );
