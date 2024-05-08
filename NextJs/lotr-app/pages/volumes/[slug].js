import { useRouter } from "next/router";
import { volumes } from "@/data";
import Link from "next/link";
import Image from "next/image";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const volume = volumes.find((volume) => volume.slug === slug);

  if (!volume) {
    return;
  }

  const currentIndex = volumes.findIndex((volume) => volume.slug === slug);
  const nextIndex = currentIndex + 1;
  const previousIndex = currentIndex - 1;

  return (
    <>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <Image
        src={volume.cover}
        width={140}
        height={230}
        alt="Picture of The fellowship"
      ></Image>
      <h2>Including :</h2>
      {volumes[0].books.map((book, index) => (
        <ul key={index}>
          <li>{book.ordinal} </li>
          <li style={{ listStyle: "none" }}>Title : {book.title} </li>
        </ul>
      ))}
      {nextIndex < volumes.length && (
        <Link href={`/volumes/${volumes[nextIndex].slug}`}> Next Volume</Link>
      )}
      <br />
      {previousIndex >= 0 && (
        <Link href={`/volumes/${volumes[previousIndex].slug}`}>
          Previous Volume
        </Link>
      )}
      <hr />
      <Link href="/">Home</Link>
    </>
  );
}

// import { useRouter } from "next/router";
// import { volumes } from "@/data";
// import Link from "next/link";
// import Image from "next/image";

// export default function VolumeDetail() {
//   const router = useRouter();
//   const { slug } = router.query;
//   const currentIndex = volumes.findIndex((volume) => volume.slug === slug);
//   const volume = volumes[currentIndex];

//   if (!volume) {
//     return null;
//   }

//   const nextIndex = (currentIndex + 1) % volumes.length;
//   const previousIndex = (currentIndex - 1 + volumes.length) % volumes.length;

//   return (
//     <>
//       <h1>{volume.title}</h1>
//       <p>{volume.description}</p>
//       <Image
//         src={volume.cover}
//         width={140}
//         height={230}
//         alt="Picture of The fellowship"
//       ></Image>
//       <h2>Including :</h2>
//       {volumes[0].books.map((book, index) => (
//         <ul key={index}>
//           <li>{book.ordinal} </li>
//           <li style={{ listStyle: "none" }}>Title : {book.title} </li>
//         </ul>
//       ))}
//       <hr />
//       <Link href={`/volumes/${volumes[nextIndex].slug}`}> Next Volume </Link>
//       <br />
//       <Link href={`/volumes/${volumes[previousIndex].slug}`}>
//         Previous Volume
//       </Link>
//       <hr />
//       <br />
//       <Link href="/">Home</Link>
//     </>
//   );
// }
