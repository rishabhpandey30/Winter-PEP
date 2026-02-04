//Q1
function areaRectangle(width, height){
    return width*height;
}
const width =5;
const height =10;
const area = areaRectangle(width, height);
console.log(`Area of Rectangle: ${area}`,area );

//Q2
function checkEvenOdd(num){
if(num%2==0){
    return"Even";
}
else{
    return "Odd";
}
}
let num = 5;
const ans = checkEvenOdd(num);
console.log(ans);

//Q3 sum of arr
function sum(ar){
    let s =0;
    for(num of ar){
        s+=num;
    }
    return s;
}
ar = [1,2,3,4];
let an = sum(ar);
console.log(an);

//Q4
function type(array){
    var result =[];
    for(num of array){
        result.push(typeof(num));
    }
    return result;
}
var array = [1, "hello", true];
console.log(type(array))

//Q5
function check(x){
    if(typeof(x)=='object'){
        return true;
    }
    else{
        return false;
    }
}
var x;
x= [1,3,5];
// x ='Hello';
console.log(check(x));

//Q6
var name = "Rishabh";
var lastname = "Pandey";
var city = "Bareilly";
var fullname = name +" "+ lastname;
console.log("I am "+ fullname + " from "+ city);
console.log(`I am ${fullname} from ${city}`); // Tamplet letral

//Q7
function reverse(s){
    var result ="";
    for(let i=s.length-1;i>=0;i--){
        result+=s[i];
    }
    return result
}
var s ='Hello';
console.log(reverse(s));

//Q8
let maxi =0;
var nums= [1,2,3,4,5]
for(let i=0;i<nums.length;i++){
    if(nums[i]>maxi){
        maxi = nums[i];
    }
}
console.log(maxi);

//Q9 check if the variable is undefiend or not
var val;
function check(val){
    if(val==undefined){
        return true;
    }
    else{
        return false;
    }
}
console.log(check(val));

//Q10 
function check(val){
    if( val && typeof(val)=='object'){
        return true;
    }
    else{
        return false;
    }
}
var val=null;
var val2 = {name: "rishabh", age: 20};
console.log(check(val));
