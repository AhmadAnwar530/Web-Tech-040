// productmodel.js

const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  image: String,
  name: String,
  price: Number,
  review: String
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
