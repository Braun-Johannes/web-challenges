import { Fragment } from "react";
import "./styles.css";
import Card from "./components/Card.js";
import Title from "./components/Title.js";
import { USERS } from "./db";

export default function App() {
  return (
    <main className="app">
      <Title text="ClientBoard" />
      <div className="app__card-grid">
        {USERS.map((user) => {
          return (
            <Fragment key={user.id}>
              <Card user={user} />
            </Fragment>
          );
        })}
      </div>
    </main>
  );
}
