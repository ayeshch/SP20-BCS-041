const express= require("express");
const app = express();
app.use(express.json());
app.get("/",function(req,res){
    res.send("Play");
});
const products=["Apple","Mango","Guava","Lemon"];
app.get("/api/products/:index",function(req,res){
    if(!products[req.params.index]) return res.status(400).send("product not found.");
    res.send(products[req.params.index]);
});
app.put("/api/products/:index",function(req,res){
    products[req.params.index]= req.body.name;
    res.send(products[req.params.index]);
})
app.delete("/api/products/:index",function(req,res){
    products.splice(req.params.index,1);
    res.send(products);
})
app.post("/api/products/:index",function(req,res){
    products.push(req.body.name);
    res.send(products);
})
app.listen(3000);