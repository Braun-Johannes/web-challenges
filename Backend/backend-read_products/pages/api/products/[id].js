import Product from "@/db/models/Product";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const fish = await Product.findById(id).populate("reviews");
    if (!fish) {
      return response.status(404).json({ status: "Not found" });
    }
    return response.status(200).json(fish);
  }
}
