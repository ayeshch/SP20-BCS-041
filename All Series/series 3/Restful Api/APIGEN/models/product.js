var mongoose=require('mongoose');

var productSchema=new mongoose.Schema({
    name:String,
    price:String,
});
const product=mongoose.model('Product',productSchema);
module.exports=product;