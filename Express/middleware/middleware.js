const express = require("express");

const app = express();

const firstMW  =(req,res,next) =>{
    console.log("I am the first middleware");
    next();
};

const logger = (req,res,next) =>{
    console.log(`Method : ${req.method}, Router : ${req.url}`);
    next();
}

const time_logger = (req,res,next)=>{
    let start = Date.now();
    next();
    let end = Date.now()
    console.log(end-start + "ms");
} 

// app.use(logger);
app.use(time_logger);
  
//default route
app.get("/",(req,res)=>{
    res.send("APi is working");
})


app.get("/about",(req,res)=>{
    res.send("this is about page");
});

let port =5000;
app.listen(port,()=>{
    console.log(  `Server is running ${port}`);
})
