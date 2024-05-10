import Link from "next/link";
import { introduction } from "../data";
import { volumes } from "../data";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function HomePage() {
  const router = useRouter();

  function getRandomVolumeUrl() {
    const randomIndex = Math.floor(Math.random() * volumes.length);
    const randomVolumeSlug = volumes[randomIndex].slug;
    return `/volumes/${randomVolumeSlug}`;
  }

  function navigateToRandomVolume() {
    const randomVolumeUrl = getRandomVolumeUrl();
    router.push(randomVolumeUrl);
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
              {volume.title}
              <br />
              <Link href={`/volumes/${volume.slug}`}>Details</Link>
            </li>
          </ul>
        );
      })}
      <button onClick={navigateToRandomVolume}>Random Volume</button>
    </div>
  );
}
