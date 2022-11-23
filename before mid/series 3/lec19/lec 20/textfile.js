const fs= require("fs");

//let data= fs.readFileSync("readfile.txt","utf-8");
let data=fs.readFile("readfile.txt","utf-8",(err,data)=>{
    console.log(data);
})

console.log("Read file.");