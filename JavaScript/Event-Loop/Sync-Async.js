/* JS Sync vs Async Programming */
console.log("A");
console.log("B");
for (let i=0; i<1000000000; i++) {
    if (i===999999999) {
        console.log("I am very slow");
    }
}
console.log("C");


let i = 1;
const id = setInterval(() => {
    if (i===5) {
        clearInterval(id);
    }
    console.log(i++);
}, 1000);

/* Write a program that shows a Promise running before setTimeout. */
setTimeout(() => console.log("Timeout"));
Promise.resolve().then(() => console.log("Promise"));
console.log("Sync");

/* Create a function that takes a callback and executes it after the call stack is clear. */
function func(cb) {
    console.log("Function execution started");
    console.log("Callback invoked");
    cb();
    console.log("Function execution ended");
}
function callback() {
    setTimeout(() => {
        console.log("Callback executed");
    }, 0);
}
func(callback);

/* Callback Hell */
setTimeout(()=>{
    console.log("Parent");
    setTimeout(()=>{
        console.log("Child 1");
        // fn();
        setTimeout(()=>{
            console.log("Child 2");
        }, 1000)
    }, 1000)
}, 1000);


//
function getNumber() {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(5);
        }, 1000);
    })
}
getNumber()
    .then((num)=>{
        console.log("1:",num);
        return num+1;
    })
    .then((num)=>{
        console.log("2:",num);
        return num+22;
    })
    .then((num)=>{
        console.log("3:",num);
    })
    .catch((err)=>{
        console.error("Error:", err.message);
    });

/* async await */ // TO BE WRITTEN LATER
function getName() {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve("Saptaparno");
        }, 1000);
    })
}


//
console.log("Start");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

//
function runAfterStackClear(callback) {
    setTimeout(callback, 0);
}
console.log("Start");

runAfterStackClear(() => {
    console.log("Callback executed");
});

console.log("End");