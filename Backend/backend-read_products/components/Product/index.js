import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews && data.reviews.length > 0 ? (
        <>
          <h2>Review: </h2>
          <p>Title: {data.reviews[0].title}</p>
          <p>Text: {data.reviews[0].text}</p>
          <p>Rating: {data.reviews[0].rating}</p>
        </>
      ) : (
        <p>No review</p>
      )}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
