import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";
// import { uid } from "uid";

// const myTags = ["JavaScript", "React", "CSS", "HTML"];

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(newTag) {
    console.log(tags);
    setTags([...tags, newTag]);
  }

  function handleDeleteTag(deletedTag) {
    setTags(tags.filter((tag) => tag !== deletedTag));
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
