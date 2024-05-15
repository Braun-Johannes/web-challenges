import useSWR from "swr";

async function fetcher(...args) {
  const response = await fetch(...args);
  return await response.json();
}

export default function HomePage() {
  const {
    data: character,
    error,
    isLoading,
  } = useSWR("/api/random-character", fetcher);

  if (error) {
    <>Error...</>;
  }

  if (isLoading) {
    <>Is Loading...</>;
  }

  if (!character) {
    return <>Is loading...</>;
  }

  return (
    <>
      {Object.entries(character).map(([key, value]) => (
        <p key={key}>
          <strong>{key}: </strong> {value}
        </p>
      ))}
    </>
  );
}

//<ul key={character.firstName}>
//<li>
//  {character.firstName} {character.lastName}
//</li>
//<li style={{ listStyle: "none" }}>Age: {character.age}</li>
//<li style={{ listStyle: "none" }}>Twitter: {character.twitter}</li>
//<li style={{ listStyle: "none" }}>Geohash: {character.geohash}</li>
//</ul>
