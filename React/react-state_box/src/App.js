import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isActive, setActive] = useState(false);

  function handleClick() {
    setActive(!isActive);

    // Check that the value changes correctly.
    console.log(isActive);
  }

  // const buttonText = isActive ? "Deactivate" : "Activate"
  // <button onClick={handleClick}>{buttonText}</button>

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Deactivate" : "Activate"}
      </button>
    </main>
  );
}
