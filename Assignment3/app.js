// var createError = require('http-errors');
// var express = require('express');
// const mongoose = require("mongoose");
// const Product = require("./models/products");
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var expresslayouts = require("express-ejs-layouts");
// // var indexRouter = require('./routes/index');
// // var productRouter = require('./routes/product');
// var app = express();
// app.use(expresslayouts);
// app.use(express.json());

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));



// app.use('/product',productRouter);
// app.use('/', indexRouter);
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// mongoose.connect("mongodb://127.0.0.1:27017/SemesterProject").then(async() => {
//     console.log("Connected to MongoDB");
//     // await createProduct();
// }).catch((err) => {
//     console.log("Error Occurred!");
//     console.log(err);
// });
// module.exports = app;


// app.js

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 3000;

// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/SemesterProject', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error Occurred!');
    console.log(err);
  });

// Configure body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Import the product model
const Product = require('./models/productmodel');

// Landing page
app.get('/', (req, res) => {
  res.render('landingPage');
});

// About page
app.get('/about', (req, res) => {
  res.render('about');
});

// Login page
app.get('/login', (req, res) => {
  res.render('login');
});

// New page
app.get('/newPage', (req, res) => {
  res.render('newPage');
});

// Shop page - Fetch and display products from the database
app.get('/shop', async (req, res) => {
  try {
    const products = await Product.find().exec();
    res.render('shop', { products });
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});


// Add a new product
app.post('/shop', (req, res) => {
  const { image, name, price, review } = req.body;
  const newProduct = new Product({ image, name, price, review });
  newProduct.save((err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.redirect('/shop');
    }
  });
});

// Delete a product
app.post('/shop/delete/:id', async (req, res) => {
  const productId = req.params.id;
  try {
    await Product.findByIdAndRemove(productId).exec();
    res.redirect('/shop');
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});

// Edit product page
app.get('/shop/edit/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    res.render('edit', { product });
  } catch (err) {
    console.log(err);
    res.status(500).send('Internal Server Error');
  }
});


// Add a review to a product
app.post('/shop/add-review/:id', (req, res) => {
  const productId = req.params.id;
  const { review } = req.body;

  Product.findById(productId, (err, product) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    } else {
      product.reviews.push(review);
      product.save((err) => {
        if (err) {
          console.log(err);
          res.status(500).send('Internal Server Error');
        } else {
          res.redirect('/shop');
        }
      });
    }
  });
});


// Import necessary modules and define your express app

// ...

// Define route for adding product to cart
app.post('/cart/add', async (req, res) => {
  try {
    const productId = req.body.productId;

    // Find the selected product by its ID
    const product = await Product.findById(productId);

    if (!product) {
      // If the product is not found, handle the error (e.g., show an error message)
      return res.status(404).send('Product not found');
    }

    // Add the product to the cart (implement your own cart logic here)
    // For example, you could add the product ID to an array in the user's session or store it in a database

    // Redirect back to the shop page or show a success message
    res.redirect('/shop');
  } catch (error) {
    // Handle any errors that occur during the process (e.g., database error)
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// ...


// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
