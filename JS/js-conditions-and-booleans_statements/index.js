console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

//or tenary

// const output = CONDITION ? true : false;
// console.log(output);
// const output =
//   receivedPassword === SUPER_SECRET_PASSWORD
//     ? "Welcome! You are logged in as Brunhilde1984."
//     : "Access denied!";
// console.log(output);

//or (ternary sloppy)

// console.log(
//   receivedPassword === SUPER_SECRET_PASSWORD
//     ? "Welcome! You are logged in as Brunhilde1984."
//     : "Access denied!"
// );

// Part 2: Even / Odd
const number = 7.5;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 1000000;

if (numberOfHotdogs < 5) {
  console.log("2 euro per hotdog");
} else if (numberOfHotdogs > 4 && numberOfHotdogs < 100) {
  console.log("1.50 euro per hotdog");
} else if (numberOfHotdogs > 99 && numberOfHotdogs < 1000000) {
  console.log("1 euro per hotdog");
} else if (numberOfHotdogs > 99999) {
  console.log("0.10 euro per hotdog");
} else {
  console.log("no hotdogs");
}

// Part 4: Daytime
const currentHour = 17;

const statement = currentHour >= 17 ? "Partytime!!" : "Still need to learn...";

console.log(statement);

// Part 5: Greeting
const userName = "Dieter";

const greeting =
  "Hello " + (userName === "Aleksandar" ? "Coach" : userName) + "!";

console.log(greeting);
