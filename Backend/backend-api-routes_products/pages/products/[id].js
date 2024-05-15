import { useRouter } from "next/router";
import useSWR from "swr";

async function fetcher(...args) {
  const response = await fetch(...args);
  return await response.json();
}

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: product,
    error,
    isLoading,
  } = useSWR(`/api/products/${id}`, fetcher);

  if (error) {
    <>Error...</>;
  }

  if (isLoading) {
    <>Is Loading...</>;
  }

  if (!product) {
    return <>No Data available...</>;
  }

  return (
    <>
      <h1>{product.name}</h1>
    </>
  );
}
