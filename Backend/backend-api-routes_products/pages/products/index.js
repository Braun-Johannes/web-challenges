import useSWR from "swr";

async function fetcher(...args) {
  const response = await fetch(...args);
  return await response.json();
}

export default function Products() {
  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  if (error) {
    <>Error...</>;
  }

  if (isLoading) {
    <>Is Loading...</>;
  }

  if (!data) {
    return <>No Data available...</>;
  }

  return (
    <>
      <h1>All Products: </h1>
      {data.map((product) => {
        return (
          <ul key={product.id}>
            <li>{product.name}</li>
            <li style={{ listStyle: "none" }}>{product.description}</li>
            <li style={{ listStyle: "none" }}>
              {product.price} {product.currency}
            </li>
            <li style={{ listStyle: "none" }}>{product.category}</li>
          </ul>
        );
      })}
    </>
  );
}
