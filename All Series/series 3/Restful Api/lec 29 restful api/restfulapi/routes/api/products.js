const express=require("express");
const router=express.Router();

//get products data
router.get("/",async(req,res)=>{
    return res.send(["pen","pencil"]);
})

module.exports=router;