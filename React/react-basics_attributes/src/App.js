import React from "react";
import "./styles.css";

export default function App() {
  return MyArticleForYou();
}

function MyArticleForYou() {
  return (
    <article className="article">
      <h2 className="article__title"></h2>
      <label htmlFor="c3po">This Button doesnt work :)</label>
      <input type="button" id="c3po" value={"Hola"}></input>
      <a
        className="article__link"
        href="https://github.com/neuefische/hh-web-24-4"
        target="blank"
      >
        Press the Button
      </a>
    </article>
  );
}
