// Higher order function
function hi(){
    console.log("hii form hii functiom");
}
function foo(hi){
    return hi();
}
foo(hi);

// ForEach ->never return any thing(gives undefined), we print output
let arr = [1,2,3,4];
arr.forEach((val,idx,arr)=>{
    console.log(val, idx,arr);
})