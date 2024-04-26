import "./styles.css";

export default function App() {
  return <Greeting name="Johannes" />;
}

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
