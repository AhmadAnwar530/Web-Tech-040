const express = require('express');
const mongoose = require('mongoose');
var cookieParser = require("cookie-parser");
var session = require("express-session");
const bodyParser = require('body-parser');
var expressLayouts = require("express-ejs-layouts");

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(expressLayouts);
app.set("view engine", "ejs");
app.use(cookieParser());

app.use(
  session({
    secret: "My Secret String",
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true,
  })
);

app.use(require("./middlewares/sitesettings"));
app.use("/api/products", require("./routes/api/products/productsRouter"));
app.use("/api/auth", require("./routes/api/auth/index"));
app.use("/", require("./routes/products"));
app.use("/", require("./routes/auth"));

app.get(
  "/cart",
  require("./middlewares/checkSessionAuth"),
  async (req, res) => {
    let cart = req.cookies.cart ? req.cookies.cart : [];
    let products = await Product.find({ _id: { $in: cart } });
    let total = 0;
    products.forEach((b) => {
      total += Number(b.price);
    });
    return res.render("cart", { products, total });
  }
);
app.get("/cookie-test", (req, res) => {
  let views = req.cookies.views ? req.cookies.views : 0;
  views = Number(views) + 1;
  res.cookie("views", views);
  return res.send(`You Visited ${views} times`);
});


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

app.get('./products/products', (req, res) => {
  res.render('products');
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});



