import { useState } from "react";
import { getD6Roll } from "../../utils";
import D6 from "../D6";
import "./D6Button.css";

export function D6Button({ value, onRoll }) {
  // const [rolls, setRolls] = useState([]);

  // const handleRoll = () => {
  //   setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  // };
  // onClick={handleRoll}

  // const currentRollValue = rolls[0]?.value;
  // <D6 value={currentRollValue} />
  return (
    <button className="d6-button" type="button" onClick={onRoll}>
      <D6 value={value} />
    </button>
  );
}
