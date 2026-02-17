const http = require('http');

const server = http.createServer((req,res)=>{
    //get method
    if(req.method === "GET"){
        res.end("This is get method");
    }
    else if(req.method === "POST"){
        res.end("This is Post method");
    }
    else if(req.method === "PUT"){
        res.end("This is Put method");
    }
    else if(req.method === "DELETE"){
        res.end("This is delete method")
    }
})

server.listen(8000, ()=>{
    console.log("Server is running in the port 8000")
})
