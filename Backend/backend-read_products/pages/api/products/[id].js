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

  if (request.method === "PUT") {
    try {
      const updatedFish = request.body;
      await Product.findByIdAndUpdate(id, updatedFish);

      response.status(200).json({ status: "Fish successfully updated." });
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "DELETE") {
    try {
      await Product.findByIdAndDelete(id);
      response.status(200).json({ status: "Product successfully deleted" });
    } catch (error) {
      console.error(error);
      response.status(400).json({ error: error.message });
    }
  }
}
