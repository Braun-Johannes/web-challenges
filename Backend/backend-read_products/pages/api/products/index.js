import dbConnect from "@/db/connect.js";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const fish = await Product.find();
    return response.status(200).json(fish);
  }

  if (request.method === "POST") {
    try {
      const productData = request.body;
      await Product.create(productData);

      response.status(201).json({ status: "Fish added" });
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: error.message });
    }
  }
}
