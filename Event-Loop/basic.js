console.log("Start");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");


function runAfterStackClear(callback) {
    setTimeout(callback, 0);
}
console.log("Start");

runAfterStackClear(() => {
    console.log("Callback executed");
});

console.log("End");
