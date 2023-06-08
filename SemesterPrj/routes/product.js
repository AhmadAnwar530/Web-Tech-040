// product.js

const express = require('express');
const router = express.Router();
const Product = require('../models/productmodel');

// Fetch all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.render('shop', { products });
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
