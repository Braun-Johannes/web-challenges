import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: "1",
      name: "Banana",
      color: "yellow",
    },
    {
      id: "2",
      name: "Apple",
      color: "green",
    },
    {
      id: "3",
      name: "Orange",
      color: "orange",
    },
    {
      id: "4",
      name: "Tomato",
      color: "red",
    },
    {
      id: "5",
      name: "Watermelon",
      color: "green",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card key={fruit.id}>{fruit.name}</Card>;
      })}
    </div>
  );
}
