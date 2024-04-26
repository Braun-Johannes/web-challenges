import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy={true} />;
}

// function Smiley({ isHappy }) {
//   return <>{isHappy ? <h1>:)</h1> : <h1>:(</h1>}</>;
// }

function Smiley({ isHappy }) {
  const smiley = isHappy ? ":)" : ":(";
  return <div>{smiley}</div>;
  // return <>{isHappy ? <h1>:)</h1> : <h1>:(</h1>}</>;
}
