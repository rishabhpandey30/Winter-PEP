const express = require("express");

const orderRouter = express.Router();
 
orderRouter.get("/",(req,res)=>{
    res.send("this is get order route");
});
orderRouter.post("/",(req,res)=>{
    res.send("this is post order route");
});
orderRouter.put("/",(req,res)=>{
    res.send("this is put order route");
});
orderRouter.delete("/",(req,res)=>{
    res.send("this is delete order route");
});

module.exports ={orderRouter}