import Link from "next/link";
import { volumes } from "@/data";

function Volumes() {
  return (
    <>
      <h1>Volumes</h1>
      <ul>
        <li>
          <Link href="">{volumes[0].title}</Link>
        </li>
        <li>
          <Link href="">{volumes[1].title}</Link>
        </li>
        <li>
          <Link href="">{volumes[2].title}</Link>
        </li>
      </ul>
      <Link href="/">Home</Link>
    </>
  );
}
