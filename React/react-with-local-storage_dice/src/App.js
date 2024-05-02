import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./styles.css";
import { getD6Roll } from "./utils";
import { useState } from "react";

export default function App() {
  const [rolls, setRolls] = useState([]);

  function handleRoll() {
    setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  }

  return (
    <div className="app">
      <main className="app__main">
        <D6Button value={rolls[0]?.value} onRoll={handleRoll} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
