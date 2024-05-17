import dbConnect from "@/db/connect.js";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const fish = await Product.find();
    return response.status(200).json(fish);
  }
}
