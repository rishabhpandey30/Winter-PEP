// Primitive
a = 30
b = a;
console.log(a);
console.log(b);

b = 30;
console.log(a);
console.log(b); // only a get change because it access only value

//Non Primitive
arr1 = [1,2,3,5];
arr2 = arr1;
console.log(arr1);
console.log(arr2);

arr1.push(10);
console.log(arr1);
console.log(arr2);  // both are changing because it accessing as address

//Arrow function

// function greet(name){      // we can call anywhere before and after creating the function
//     return `Good morning ${name}`;
// }

let greet = (name) =>{    // It is not access fully as normal function we can call after the arrow function
    return `Good morning ${name}`;    
};
console.log(greet("rishabh"));

//Q1.
let findEvenNumber =(arr) =>{
    let arr2=[];
    for(num of arr){
        if(num%2==0){
            arr2.push(num);
        }
    }
    return arr2;
}
console.log(findEvenNumber([1,2,3,4,5,6]));

// Spread -> accessing the element particularly
// Rest -> collect multiple values into one array.
arr = [1,2,3,4]
arr2 = [5,6,7]

array = [...arr, ...arr2]
console.log(array); // give me after combining both the array

[a ,b,c ] = arr2; //spreading arr into a b c
console.log(a);

// Accessing the degree name without using .(dot) notation
 let person ={
    name : "Pk",
    age : 28,
    profile: [{desig : "software dev", deg : "Btech"}, {role: "fontend"}]
 }

let {profile} = person;
let [obj,obj2] = profile;
let {desig,deg:degreename} = obj;
console.log(degreename);

//
let user ={
    firstname : "rishabh",
    lastname : "pandey",
    age : 20,
    post : [{title : "post1", comments : 10}, {title : "Post2", comments : 11}],
}
let {post} = user;
let [ob,ob2] = post;
let {comments: comment1} = ob;
let {comments: comment2} = ob2;
console.log(comment1, comment2);

//
user={
    firstname : "rishabh",
    lastname : "pandey",
    age : 20,
    education : {
        degree : {
            name : "Cse",
        },
    },
}

let {education :{degree :{name}}} = user  // Acessing in one line
console.log(name);

// accessing keys and value using loop
for(i in user){
    console.log(i + ": " + user[i]);
}

// print first and last element using spreading
let destruct = (arr) =>{
    [val1, val2,val3, val4] = arr;
    console.log(val1, val4);
}
arr = [1,2,3,4];
destruct(arr);

// without spreading we can directly access
console.log(arr[0],arr[arr.length-1]);

// Rest -> combine the element into one
function great(...rest){
    return `Hi, I am ${rest[0]} my hobbies are ${rest[1]},${rest[2]}`
}
let ans = great("Rishabh", "Cricket", "Music");   // this will convert to one array
console.log(ans);

//
user = {
    name : "Rishabh",
    lastname : "Pandey",
    age : 20,
    section : "ABC",
}
function fun(user){
    let {age,...rest} = user
    console.log(rest);
}
fun(user);

// optional chaining 
user = {
    name : "Rishabh",
    lastname : "Pandey",
    age : 20,
    address : {
        city : "New York",
        street : "123 main"
    }
}
console.log(user.address.city)
// console.log(user.addres.city) // it will give the error because addres is not there
console.log(user?.addres?.city) // it will give me undefined we are using optional chaining

//Q2.
product ={
    name : "Mobile",
    price : 100000,
}
function discount(product){
    let price = (product?.price);
    if(price){
      return String(price - (price/10).toFixed(2));
    }  
}
console.log(discount(product));