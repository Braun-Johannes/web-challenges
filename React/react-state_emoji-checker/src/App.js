import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  // let code = "?";
  const [code, setCode] = useState("");

  const validCode = "🐡🐠🐋";

  const isValid = code === validCode;

  function handleCode(event) {
    setCode(code + event.target.textContent);
  }

  function handleReset() {
    setCode("");
  }

  return (
    <div className="container">
      <p>
        {code} should match: {validCode}
      </p>
      <div className="button-container">
        <button type="button" onClick={handleCode}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button type="button" onClick={handleCode}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button type="button" onClick={handleCode}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>

      <button type="button" onClick={handleReset}>
        Reset
      </button>

      {isValid && <p>Valid code!</p>}
    </div>
  );
}
