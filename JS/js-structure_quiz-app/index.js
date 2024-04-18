// Store the cards in a global state

// import { Header } from "./components/Header/Header.js";
// import { handleFormSubmit } from "./components/Form/form.js";
// import { Form } from "./components/Form/form.js";
// import { Bookmark } from "./components/Bookmark/bookmark.js";
// import { Card } from "./components/Card/card.js";
// import { CardList } from "./components/CardList/cardList.js";
// import { render } from "./components/App/app.js";
import { App } from "./components/App/app.js";

function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
