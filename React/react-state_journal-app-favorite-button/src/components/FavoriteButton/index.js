import { useState } from "react";
import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

export default function FavoriteButton() {
  // this should be a state variable
  // const isFavorite = false;
  const [isFavorite, setFavorite] = useState(false);

  function handleFavorite() {
    return setFavorite(!isFavorite);
  }

  return (
    <button
      className="favorite-button"
      onClick={handleFavorite}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
