import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

export default function Character() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(
    `https://swapi.dev/api/people/${id}/`
  );

  if (error) {
    return <>Error...</>;
  }
  if (isLoading) {
    return <>Is loading...</>;
  }

  const person = data;

  return (
    <Layout>
      <Card
        id={id}
        name={person.name}
        height={person.height}
        eyeColor={person.eye_color}
        birthYear={person.birth_year}
      />
    </Layout>
  );
}
