const express= require("express");
const app = express();
const mongoose = require("mongoose");
const {createproduct,getAllProducts,deleteProducts,update}= require("./productsOperations");
app.use(express.json());
mongoose.connect("mongodb://localhost/mernStack",{useNewUrlParser:true,useUnifiedTopology:true})
.then(async()=>{
    console.log("Connection is established.");
    // // let product=await createproduct("Dell",200,["funny","classy"]);
    // // console.log(product);
    // let allproducts=await getAllProducts();
    // console.log(allproducts);
    //console.log(await deleteProducts("636b97fb91665154497af1cf"));
    
    let updateProduct= update("636bbb6b911b8b6d053dbe51","Dell updated");
}).catch((err)=>{
    console.log("Error connecting.");
    console.log(err);
})
app.listen(3000);