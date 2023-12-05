const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  img: {
    type: [
      {
        type: String,
      },
    ],
  },
  name: String,
  code: String,
  price: Number,
});

const Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;
