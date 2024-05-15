import { getProductById } from "@/services/productServices";

export default function handler(request, response) {
  const { id } = request.query;

  if (!id) {
    response.status(404).json({ status: "Not found" });
    return;
  }
  response.status(200).json(getProductById(id));
}
