const mongoose= require("mongoose");

const productSchema= mongoose.Schema({
    title:String,
    tags:[String],
    price:Number,
});

const productModel= mongoose.model("Product",productSchema);

module.exports= productModel;
