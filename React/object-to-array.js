let obj = {
    name : "Rishabh",
    age : 20,
    role : "Student",
    city : "Bareilly"
}

let data = Object.entries(obj);
console.log(data);
console.log("First Pair",data[0]);
console.log("First Value",data[0][1]);