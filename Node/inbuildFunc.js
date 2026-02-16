// const os= require("os")
// console.log(os.networkInterfaces());
// console.log(os.userInfo());
// console.log(os.version());

//File System
const fs = require("fs")
fs.readFile("./Practice/Node/dummy.txt", {encoding:"utf-8"}, (err,data) =>{
    console.log(data);
    console.log(err);
})

const data = "Hii this is added"
fs.writeFile("./Practice/Node/dummy.txt", data, (err)=>{
    if(err){
        console.log("error while writing", err)   // overwrite the data
    }
    console.log("Done");
})

const newData = "\nThis is Updated";
fs.appendFile("./Practice/Node/dummy.txt", newData, (err)=>{
    console.log("done")      // add every time when it runs
})

// fs.unlink("./Practice/Node/dummy.txt",(err)=>{
    // console.log("Done")    // Delete the file
// })