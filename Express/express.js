const { json } = require("body-parser");
const { log } = require("console");
const fs = require("fs");
const express = require("express");

const app = express();

app.use(express.json()) // to add the data in json format

app.get("/",(req,res)=>{
    // res.write("Hello")
    // res.end("API is working")
    res.send("Hello")
})

// get the data
app.get("/post", (req,res)=>{
    // res.send("response from post")
    // const data = fs.readFileSync("./data.json", "utf-8");   // in sync we do not use call back function 
    //  let newData = JSON.parse(data).name   // to access in the object
    // res.send(data);
    fs.readFile("./data.json", "utf-8" , (err,data)=>{
        if(err){
            res.send("Error occured");
        }
        else{
            res.send(data);
        }
    })
})

//add the data
app.post("/post/add", (req,res)=>{
    let data = req.body;
    data = JSON.stringify(data);
    // fs.writeFile("./data.json", data, (err)=>{
    //     if(err){
    //         res.send("error while writing");
    //     }
    //     else{
    //         res.send("Data Added")
    //     }
    // });

    fs.appendFile("./data.json", data,(err)=>{
        if(err){
            res.send("error while writing");
        }
        else{
            res.send("Data Updated")
        }
    });
    // console.log(data);
})


// writing in the object
app.post("/post/insert",(req,res)=>{
    let data = req.body
    let postData = fs.readFileSync("./post.json", "utf-8");

    parsedData = JSON.parse(postData);    // accessing the object

    parsedData.order.push(data);   // pushing new data in the object

    newData = JSON.stringify(parsedData);

    fs.writeFile("./post.json", newData ,(err)=>{
        if(err){
            res.send("err");
        }
        else{
            res.send("done");
        }
    })

})


//query 
app.get("/lecture", (req,res)=>{
    let data = req.query.data;
    console.log(`Query made for data ${data}`)
    res.send("Query send")
})

app.get("/vote",(req,res)=>{
    let {name,age} = req.query;
    if(age>18){
        res.send(`${name} eligible for vote`);
    }
    else{
        res.send(`${name} you are not eligible`)
    }
})

// params
app.get("/params/:id",(req,res)=>{
    let data = req.params.id;
    console.log(`Here is your lecture ${data}`);
    res.send("params made")
})

let port = 9000;
app.listen(port, ()=>{
    console.log(`Server is running in the port ${port}`);
})