let a = {};
let b = "RP";
let c = NaN;
let z = a || b || c;  // it will give the first truthy value if truthy is present
console.log(z);

a = 0;
b = "";
c = NaN;
z = a || b || c; //it will give the last falsy value when all the value are false
console.log(z);

// Q1.
let res = (null && "A") || ("" || (5 && "hi"));
            // null ||  ("" || hi) 
            // null || hi
            //hi
console.log(res);

// Q2.
res = !("" || 0) && (NaN || "Js")
    // !(0) && ("js")
    // 1 && "Js" -> Js (last truth value)
console.log(res);

// Q4.
function isTruthy(a,b,c){
    if(a || b || c != false){
        return true;
    }
    else{
        return false;
    }
}
console.log(isTruthy(NaN,"Ris", 0)); // --> True
console.log(isTruthy(NaN,"", 0));   // --> false

console.log(true + false) // 1
console.log(10+"abc") //NaN

//Q(Important) check if the value if object, array or null if not then return type of value
function type(a){
    if(Array.isArray(a)){
        return "array";
    }
    else if( a && typeof(a) === "object"){
        return "object";
    }
    else if(a === null){
        return null;
    }
    else{
        return typeof(a);
    }
}
console.log(type("abc"));