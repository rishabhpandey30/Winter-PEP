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
        res.write("Hello from salt")
        res.end()
    }
    else {
        res.write("Hello from server")
        res.end()
    }
    console.log(`URL: ${req.url}`)
    console.log(`Method: ${req.method}`)
})

let port=8002

server.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})


