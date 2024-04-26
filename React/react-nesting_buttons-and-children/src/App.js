import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Wow!</Button>
      <Button>Magic!</Button>
      <Button>Amazing!</Button>
      <Button>Wow!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
