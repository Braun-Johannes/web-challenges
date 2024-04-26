import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={2} valueB={5} />;
}

function Sum({ valueA, valueB }) {
  return (
    <>
      <h1>
        The Sum of {valueA} and {valueB} is {valueA + valueB}
      </h1>
    </>
  );
}
