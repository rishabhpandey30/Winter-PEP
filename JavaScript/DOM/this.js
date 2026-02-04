const user ={
    name : "Rishabh",
    great(){
        console.log(this.name)
    }
}
user.great();

//
const obj ={
    name : "Rishabh Pandey",
    show(){
        function inner(){
            console.log(this.name);
        }
        inner();
    }
}
obj.show();  //undefined

//
const obj2 ={
    name : "Rishabh Pandey",
    show(){
        console.log(this.name);
        function inner(){
            console.log(this)
        }
        inner();
    }
}
// obj2.show()

const obj3 ={
    name : "Pandey",
    show() {
        const inner =() =>{
            console.log(this.name);
        }
        inner();
    }
}
obj3.show()