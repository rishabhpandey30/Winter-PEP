//custom middleware
const express = require("express");

const {orderRouter} = require("./routes/order.route");


const app = express();

app.use("/orders",orderRouter);

//default route
app.get("/",(req,res)=>{
    res.send("APi is working");
})


let port = 8800;
app.listen(port,()=>{
    console.log(  `Server is running ${port}`);
})
