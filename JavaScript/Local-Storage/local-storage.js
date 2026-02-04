// Local Storage method : setItem(), getItem(), removeItem(), clear()

localStorage.setItem("Fruite", "Apple");  // Create new key value
// localStorage.setItem("Fruite", "Mango");  // changing the value if alredy present the key
//
value = localStorage.getItem("Fruite")
console.log(value);
//
// localStorage.removeItem("Fruite")
//
// localStorage.clear()

let obj = {
    name : "Rishabh",
    age : 20,
    course : "Btech"
}

localStorage.setItem("obj" , JSON.stringify(obj))
localStorage.setItem("name" , JSON.stringify(obj.name))
localStorage.setItem("age" , JSON.stringify(obj.age))

// JSON.parse(data) --> change the string format to object

