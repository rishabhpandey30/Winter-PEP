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

