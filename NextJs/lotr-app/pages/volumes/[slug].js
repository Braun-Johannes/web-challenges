import { useRouter } from "next/router";
import { volumes } from "@/data";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

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

  //Style begins

  const StyledHead = styled.div`
    padding: 20px;
  `;

  const StyledHeadline = styled.h1`
    font: var(--font-headline-1);
  `;
  const StyledDiv = styled.div`
    background-color: ${volume.color};
    padding: 20px;
    display: flex;
  `;

  const StyledDescription = styled.p`
    font: var(--font-caption);
  `;

  const StyledUl = styled.ul`
    list-style: none;
  `;

  const StyledLi = styled.li`
    font: var(--font-caption--italic);
    color: white;
  `;

  const StyledLiTitle = styled.li`
    font: var(--font-title);
    color: white;
  `;

  return (
    <>
      <StyledHead>
        <Link href="/">All Volumes</Link>
        <StyledHeadline>{volume.title}</StyledHeadline>
        <StyledDescription>{volume.description}</StyledDescription>
      </StyledHead>
      <StyledDiv>
        {volumes[0].books.map((book, index) => (
          <StyledUl key={index}>
            <StyledLi>{book.ordinal} </StyledLi>
            <StyledLiTitle style={{ listStyle: "none" }}>
              {book.title}{" "}
            </StyledLiTitle>
          </StyledUl>
        ))}
        <Image
          src={volume.cover}
          width={140}
          height={230}
          alt="Picture of The fellowship"
        ></Image>
      </StyledDiv>
      {nextIndex < volumes.length && (
        <Link href={`/volumes/${volumes[nextIndex].slug}`}> Next Volume</Link>
      )}
      <br />
      {previousIndex >= 0 && (
        <Link href={`/volumes/${volumes[previousIndex].slug}`}>
          Previous Volume
        </Link>
      )}
    </>
  );
}
