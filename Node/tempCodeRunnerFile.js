fs.writeFile("./Practice/Node/dummy.txt", data, (err)=>{
    if(err){
        console.log("error while writing", err)
    }
    console.log("Done");
})