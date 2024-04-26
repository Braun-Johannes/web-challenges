console.clear();

const url = "https://example-apis.vercel.app/api/bad-jokes";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}

// const data = await fetchData()

fetchData();
