const Products = require("../models/productsModel");

async function getProductlist(req, res) {
  try {
    const productlist = await Products.find({})
    res.status(200).send(productlist);
  } catch (err) {
    res.status(500).send("Internal Server Error: Products not found");
  }
}

async function createProduct(req, res) {
  try {
    const { img, name, code, price } = req.body;
    if (!img || !name || !code || !price) {
      return res.status(400).send("All fields are required");
    } else {
      const product = new Products({ img, name, code, price });
      await product.save();
      res.status(200).send("Add Product Success");
    }
  } catch (err) {
    res.status(500).send("Internal Server Error: Products not found");
  }
}

module.exports = {
  getProductlist,
  createProduct,
};
