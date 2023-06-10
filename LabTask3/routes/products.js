const express = require("express");
const router = express.Router();
let ProductModel = require("../models/productmodel");
router.get("/products/add", (req, res) => {
  res.render("products/product-form");
});
router.post("/products/add", async (req, res) => {
  let product = new ProductModel(req.body);
  await product.save();
  // return res.send("record saved");
  res.redirect("/products");
});
router.get("/products/delete/:id", async (req, res) => {
  let product = await ProductModel.findByIdAndDelete(req.params.id);
  res.redirect("/products");
});
router.get("/products/edit/:id", async (req, res) => {
  let product = await ProductModel.findById(req.params.id);
  res.render("products/product-edit-form", { product });
});
router.post("/products/edit/:id", async (req, res) => {
  let product = await ProductModel.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/products");
});
router.get("/products/cart/remove/:id", async (req, res) => {
  let cart = req.cookies.cart ? req.cookies.cart : [];
  let index = cart.findIndex((c) => c == req.params.id);
  cart.splice(index, 1);
  res.cookie("cart", cart);
  return res.redirect("back");
});
router.get("/products/cart/:id", async (req, res) => {
  let cart = req.cookies.cart ? req.cookies.cart : [];
  cart.push(req.params.id);
  res.cookie("cart", cart);
  return res.redirect("back");
});
router.get("/products/:id", async (req, res) => {
  let product = await ProductModel.findById(req.params.id);
  res.render("products/product-single", { product });
});

router.get("/products/", async (req, res) => {
  // let books = [{ title: "OS" }, { title: "Web" }];
  let products = await ProductModel.find();
  console.log(products);
  // res.send(books); // this is how you send data
  // return res.send(books);
  res.render("products/products", { products });
});
module.exports = router;