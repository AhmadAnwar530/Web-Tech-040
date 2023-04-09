const express = require("express");
let server = express();
server.use(express.static("public"));
server.set("view engine", "ejs");
server.get("/login.ejs", (req, res) => {
  res.render("login");
});
server.get("/newPage.ejs", (req, res) => {
    res.render("newPage");
  });

server.get("/shop.ejs", (req, res) => {
    res.render("shop");
  });

server.get("/about.ejs", (req, res) => {
    res.render("about");
  });
server.get("/", (req, res) => {
  res.render("landingPage");
});
server.listen(4000);