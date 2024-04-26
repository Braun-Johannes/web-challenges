import React from "react";
import "./styles.css";

export default function App() {
  return (
    <Button color="red" disable={false} text="Click Me" onClick={handleClick} />
  );
  function handleClick() {
    console.log("You clicked me!");
  }
}

function Button({ color, disable, text, onClick }) {
  return (
    <>
      <button
        style={{
          backgroundColor: color,
          cursor: disable ? "not-allowed" : "pointer",
        }}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}

//{() => console.log("So ned!")}

// {{ color: "red" }}
// function Button({ color, disable, text }) {
//   return (
//     <>
//       <button style={color}>{text}</button>
//     </>
//   );
// }
