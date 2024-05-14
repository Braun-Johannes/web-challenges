import { createServer } from "node:http";

// export const server = …
export const server = createServer((req, res) => {
  res.statusCode = 200;
  res.end("Hello, Johannes");
});
