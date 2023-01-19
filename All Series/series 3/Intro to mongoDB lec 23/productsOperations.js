const { get } = require("mongoose");
const productModel=require("./models/productModel")
const createproduct= async(title,price,tags)=>{
    console.log("   Create Product ");
    let product= new productModel();
    product.title=title;
    product.price=price;
    product.tags=tags;
    await product.save();
    return product;
}
const update= async(_id,title,price,tags)=>{
    console.log("   Create Product ");
    let product= await productModel.findById(_id);
    product.title=title;
    product.price=price;
    product.tags=tags;
    await product.save();
    return product;
}
const getAllProducts=async()=>{
    let products=await productModel.find();
    return products;
}
const deleteProducts=async(_id)=>{
    let product=await productModel.findByIdAndDelete(_id);
    return product;
}

module.exports.createproduct= createproduct;
module.exports.getAllProducts= getAllProducts;
module.exports.deleteProducts= deleteProducts;
module.exports.update= update;
