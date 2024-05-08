import Link from "next/link";
import { introduction } from "../data";
import { volumes } from "../data";

export default function HomePage() {
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      {volumes.map((volume) => {
        return (
          <ul key={volume.slug}>
            <li>
              {volume.title}{" "}
              <Link href={`/volumes/${volume.slug}`}>Details</Link>
            </li>
          </ul>
        );
      })}
      <button>Random Volume</button>
    </div>
  );
}
