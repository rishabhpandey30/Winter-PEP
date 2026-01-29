// Creating the new Element
let container = document.createElement("div");
container.style.border = "1px solid black";
container.style.height = "250px"
container.style.width = "300px";
let div = document.createElement("div");
div.style.border = "1px solid black";
div.style.height = "190px";
div.style.width = "150px";
div.style.overflow = "hidden";

let img = document.createElement("img")
img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK5CqiQQDLVEVd_mEtfKpqF8MTZj0SqiEEWg&s"
let h1 = document.createElement("h1");
h1.innerText ="Hello bhai kase ho";

div.append(img);
container.append(div,h1)
document.body.appendChild(container)

//Q1. Itrating in the class and printing its id
let ptag = document.querySelectorAll(".ptag")
console.log(ptag)
ptag.forEach((val)=>{
    console.log(val.id);
})

//Q2.
let divnew = document.createElement("div");
document.body.append(divnew);

let head = document.createElement("h1");
head.innerText = "Rishabh Pandey"
divnew.appendChild(head);

let p = document.createElement("p");
p.innerText = "thia is p tag";
divnew.insertBefore(p,head);
p.remove()

//Q3.
for(let i=0;i<5;i++){
let card = document.createElement("div")
card.style.border = "1.2px solid black";
card.style.height = "250px"
card.style.width = "300px";
card.style.boxShadow ="2px 2px 2px black";
document.body.append(card);
}







