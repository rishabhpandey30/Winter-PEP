let arr = [1,2,3,"Rishabh", null, true, {name:"Rishabh"}];

arr.push(2);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(2);
console.log(arr);

var value = arr.slice(0,3);
console.log(value);

var value = arr.splice(0,1,5);
console.log(arr);

// object
let ob = {
    name : "Rishabh",
    age : 28,
};
console.log(ob);

console.log(ob.name);

ob["email"] = "rishabhpandey@gmail.com";
console.log(ob);