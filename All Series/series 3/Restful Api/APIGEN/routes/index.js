var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index",{title:"Express"});
});
// router.get('/contactus', function(req, res, next) {
//   res.render("contactus");
// });

// router.get('/products', function(req, res, next) {
//   res.send("Hello Products!");
// });

module.exports = router;
