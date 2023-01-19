//const sum= require("./calculator");   for single export
const {sum,subtract,multiply}= require("./calculator");
console.log("My code is starting.");

console.log(subtract(3,5));