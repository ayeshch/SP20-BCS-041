var express = require("express");
var router = express.Router();
var Product = require("../models/Product");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
/* GET home page. */
router.get("/login", function (req, res, next) {
  return res.render("site/login");
});

router.post("/login", async function (req, res, next) {
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    req.flash("danger", "User with this email not present");
    return res.redirect("/login");
  }
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (validPassword) {
    req.session.user = user;
    req.flash("success", "Logged in Successfully");
    return res.redirect("/");
  } else {
    req.flash("danger", "Invalid Password");
    return res.redirect("/login");
  }
});
router.get("/register", function (req, res, next) {
  return res.render("site/register");
});
router.get("/logout", async (req, res) => {
  req.session.user = null;
  console.log("session clear");
  return res.redirect("/login");
});
router.post("/register", async function (req, res, next) {
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    req.flash("danger", "User with given email already registered");
    return res.redirect("/register");
  }
  user = new User(req.body);
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(req.body.password, salt);

  await user.save();
  return res.redirect("/login");
});
router.get("/contact-us", function (req, res, next) {
  return res.render("site/contact", { layout: "layout" });
});
router.get("/", async function (req, res, next) {
  let products = await Product.find();
  return res.render("site/homepage", {
    pagetitle: "Awesome Products",
    products,
  });
});
router.get("/product", async function (req, res, next) {
  let products = await Product.find();
  return res.render("site/product", {
    pagetitle: "Awesome Products",
    products,
  });
});
router.get("/offers", async function (req, res, next) {
  let products = await Product.find();
  return res.render("site/offers", {
    pagetitle: "Awesome Products",
    products,
  });
});
router.get("/face", async function (req, res, next) {
  let products = await Product.find();
  return res.render("site/face", {
    pagetitle: "Awesome Products",
    products,
  });
});
router.get("/lips", async function (req, res, next) {
  let products = await Product.find();
  return res.render("site/lips", {
    pagetitle: "Awesome Products",
    products,
  });
});
router.get("/oil", async function (req, res, next) {
  let products = await Product.find();
  return res.render("site/oil", {
    pagetitle: "Awesome Products",
    products,
  });
});
router.get("/body", async function (req, res, next) {
  let products = await Product.find();
  return res.render("site/body", {
    pagetitle: "Awesome Products",
    products,
  });
});


router.get("/offers",function(req,res,next){
  console.log("offers working.");
  return res.render("site/offers",{layout:"layout"});
})
router.get("/product",function(req,res,next){
  console.log("products working.");
  return res.render("site/product",{layout:"layout"});
})
router.get("/about",function(req,res,next){
  console.log("abouts working.");
  return res.render("site/about",{layout:"layout"});
})
router.get("/face",function(req,res,next){
  console.log("abouts working.");
  return res.render("site/face",{layout:"layout"});
})
router.get("/oil",function(req,res,next){
  console.log("abouts working.");
  return res.render("site/oil",{layout:"layout"});
})
router.get("/body",function(req,res,next){
  console.log("abouts working.");
  return res.render("site/body",{layout:"layout"});
})
router.get("/lips",function(req,res,next){
  console.log("abouts working.");
  return res.render("site/lips",{layout:"layout"});
})
router.get("/refund",function(req,res,next){
  console.log("abouts working.");
  return res.render("site/refund",{layout:"layout"});
})
module.exports = router;
