// var x = 5; // I will be executed
//  //var x = 6; //I will NOT be executed
//  //console.log(x);

 var txt = "";
var numbers = [45, 4, 9, 16, 25];
console.log( numbers.forEach(myFunction));

function myFunction(index) {
txt = txt + index + "<br>";
}
