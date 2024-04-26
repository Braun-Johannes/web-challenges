import "./Tag.css";

export default function Tag({ tag }) {
  const tagClassName = `tag ${tag === "admin" ? "tag--highlight" : ""}`;
  return <li className={tagClassName}>{tag}</li>;
}
