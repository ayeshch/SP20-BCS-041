var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("products");
  // res.render('index', { title: 'Express' });
});

// window.onload = function(){
//   //do all bindings here
//   var btn= document.getElementById("btnAdd");
//   btn.onclick = handeladd;
// };
// function handeladd(){
//   var newtodo= document.getElementById("newtodo").value;
//   var todo = document.getElementById('todo');
//   var newtodotext= document.createTextNode(newtodo);
//   var newli= document.createElement("li");
//   newli.appendChild(newtodotext);
//   todo.appendChild(newli);
//   console.log(newtodo.value);
// }
// function handeldelete(e){
//   var tag = e.target;
//   var li= tag.parentNode;
//   li.parentNode.removeChild(li);

// }

module.exports = router;
