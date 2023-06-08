const express = require('express');
const router = express.Router();
const Product = require('../../../models/productmodel');

router.get("/:id", async (req, res) => {
  let product = await Product.findById(req.params.id);
  res.send(product);
});
router.delete("/:id", async (req, res) => {
  let product = await Product.findByIdAndDelete(req.params.id);

  res.send(product);
});
router.put("/:id", async (req, res) => {
  let product = await Product.findById(req.params.id);
  product.review = req.body.review;
  await product.save();
  res.send(product);
});

router.get("/", require("../../../middlewares/apiauth"), async (req, res) => {
  let products = await  Product.find();
  res.render('shop', { products });
  res.send(products);
});
router.post("/", async (req, res) => {
  let newProduct = new Product(req.body);
  await newProduct.save();
  res.send(newProduct);
});

module.exports = router;
