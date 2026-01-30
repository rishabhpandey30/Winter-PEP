// global Scope
let a = 20
function value(){
    console.log(a);
}
value()
console.log(a)

// functional Scope
function value(){
    let b = 20
    console.log(b);
}
value()
// console.log(b); //can not access b as it is function scope

//block Scope
if(true){
    let c = 10;
    console.log(c);
}
// console.log(c); // cannot access the c
//
for(let i=0;i<5;i++){
    console.log(i);
}
// console.log(i); // cannot access the i outside the block

// Using var --> follow functional and global scope only 
// console.log(ans); //error
function print(){
    var ans =20;
    console.log(ans);
}
print()
// console.log(ans); //error

//
var aa = "hello"
if(true){
    let bb= 20;
    console.log(aa);
    console.log(bb);
    var aaa = "hey"
}
console.log(aaa)   // var do not folloe block scope
// console.log(bb)  // cant access the bb as it is block scope

//
for(var i=0;i<5;i++){
    console.log(i);
}
console.log(i);  // we can access

//
console.log("new")
// for(var i=0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },0)
// }

// // 
// for(let i=0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },i*1000)
// }

// Scope Chain
let ab = "Global"
function Test(){
    let ba = "functional"
    if(true){
        let ca ="block"
        console.log(ab)
        console.log(ba)
        console.log(ca)
    }
}
Test();
