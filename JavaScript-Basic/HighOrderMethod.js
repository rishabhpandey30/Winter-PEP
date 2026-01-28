// Higher order function
function hi(){
    console.log("hii form hii functiom");
}
function foo(hi){
    return hi();
}
foo(hi);

// ForEach ->never return any thing(gives undefined), we print output (same array)
let arr = [1,5,3,9,4];
arr.forEach((val,idx,arr)=>{
    console.log(val, idx,arr);
})

//Q1. 
array =[
    {
        name : "Rishabh",
        age : 20,
        section : "A",
    },
    {
        name : "Pandey",
        age : 30,
        section : "B",
    },
    {
        name : "Rahul",
        age : 25,
        section : "C",
    }
]
array.forEach((val)=>{
    console.log(val.name, val.age);
})

// map() it will return the modified array(new array return dont modify the actual) 
arr2=[]
arr2 = arr.map((val)=>{
    // arr2.push(val)
    return val;

})
console.log(arr2)

//Q2.
str = ["Rishabh", "pandey","Ram"];
str2 = str.map((val)=>{
    return val.toUpperCase();
})
console.log("Defaul array:",str);
console.log("Modified:",str2);

//Q3.
arrStr = ["1","2","3","4"];
arr2 = arrStr.map((val)=>{
    return Number(val);
})
console.log(arrStr)
console.log(arr2);

//Q4.
arr2 = arr.map((val)=>{
    if(val%2 ==0){
        return "Even";
    }
    else{
        return "Odd";
    }
})
console.log(arr);
console.log(arr2);

//Q5. Create a function return the object with the element as key and frequency as value
newArray = [1,2,1,3,3,5,"hi","hello","hi",1,1]
obj ={}
newArray.map((val)=>{
    if(obj[val]){
        obj[val]++;
    }
    else{
        obj[val] =1;
    }
    return obj;
})
console.log(obj);

//Q6.remove the space
str = ["hello world", "good day"];
str2 = str.map((val)=>{
    return val.replace(" ","");
})
console.log(str2);
//remove the space and make the first letter capital
str = ["hello world", "good day"];
result = str.map((s) => {
    return s.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join("");
});
console.log(result);

//Q7. Capital the first letter
str = ["apple", "banana", "mango"];
str2 = str.map((val)=>{
    return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
})
console.log(str2);

//Filler Method -> return new do not change in the given array
arr = [1,2,3,4,5,6,7];
even = arr.filter((val)=> val%2 == 0)
console.log(even);

// Remove the space
str = ["","apple","", "banana", "mango",""]
ans = str.filter((val)=>{
    return val != "";
})
console.log(ans);

//Q8. Filter the age greater than 18
user = [
    {
        name : "Aman", age : 16
    },
    {
        name : "Riya", age : 21
    },
    {
        name : "Kunal" ,age : 17
    },
    {
        name : "Neha" , age : 23
    }
]
ans = user.filter((val)=>{
    return val.age > 18;
})
console.log(ans);

//Q9. Filter the Small letter
word = ["Hello", "world", "JavaScript", "map", "Code"];
ans = word.filter((val)=>{
    // if(val.charAt(0) == val.charAt(0).toUpperCase()){
    //     return val;
    // }
    return val.charAt(0) == val.charAt(0).toUpperCase(); 
})
console.log(ans);


// Reduce -> Combine all values to one
arr = [1,2,3,4,5,6];
sum = arr.reduce((s,val)=>{
    return s+val;
},0)
console.log(sum);

//Q. Product using reduce
product= arr.reduce((p,val)=>{
    return p*val;
},1)
console.log(product);

// Max 
max= arr.reduce((p,val)=>{
    return p>val ? p: val;
},1)
console.log(max);

//Q. Frequency
str = ["apple", "banana","apple", "apple", 1 ,2 ,1];
freq = str.reduce((acc,val)=>{
    // acc[val] = (acc[val] || 0)+1;
    // return acc;
    if(acc[val]){
        acc[val]++;
    }
    else{
        acc[val]=1;
    }
    return acc;
},{})
console.log(freq);

//Q. Group the odd and even
arr = [1,2,3,4,5,6,7];
ans = arr.reduce((acc,val)=>{

})