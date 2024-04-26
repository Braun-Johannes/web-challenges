import "./Card.css";
import Tag from "./Tag.js";
import Button from "./Button.js";
// import { USERS } from "../db";

function Card({ user }) {
  return (
    <article className="card">
      <h2>{user.name}</h2>
      <ul className="card__taglist">
        {" "}
        {user.roles.map((role) => {
          return (
            // <Fragment key={role}>
            <Tag key={role} tag={role} />
            /* </Fragment> */
          );
        })}
      </ul>
      <p>{user.about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;
