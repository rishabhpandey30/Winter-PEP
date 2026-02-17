const http=require("http")
const fs=require("fs");
// console.log(http)
const server=http.createServer((req,res)=>{
  //  console.log("hello from my first server")
    //res.write("hi")
    if(req.method==="GET" && req.url==="/sugar"){
        fs.readFile("index.txt",{encoding:"utf-8"},(err,data)=>{
            if(err){
            res.write("Hello from sugar")
            res.end()
            }else{
                res.end(data);
            }
        })
    }
    else if(req.method==="POST" && req.url==="/salt"){
        let result=""
        req.on("data",(data)=>{
            result+=data;
        })
        req.on("end",(data)=>{
            console.log(result)
            res.end("data received")
        })
      //  res.write("Hello from salt")
        // res.end()
    }
    else if(req.url==="/default"){
        res.setHeader("content-type","text");
        res.end("hi")
    }
    else {
        res.write("Hello from server")
        res.end()
    }
    // console.log(`URL: ${req.url}`)
    // console.log(`Method: ${req.method}`)
})

let port=8003

server.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})


