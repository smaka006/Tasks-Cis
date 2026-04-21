//----------------- Assignment from 94 to 101 -------------------------
//----------------- Assignment 2--------------------------------
let add = document.querySelector(".classes-to-add");
let remove = document.querySelector(".classes-to-remove");
let currentElement = document.querySelector(".element.current");
let classlist = document.querySelector(".classes-list div");

function showclass() {
  let classes = Array.from(currentElement.classList)
    .filter((c) => c !== "element" && c !== "current")
    .sort();
  classlist.innerHTML = "";
  if (classes.length === 0) {
    classlist.textContent = "No Classes To Show";
  } else {
    classes.forEach((c) => {
      let span = document.createElement("span");
      span.textContent = c;
      classlist.appendChild(span);
    });
  }
}
add.addEventListener("blur", function () {
  let value = add.value.trim().toLowerCase();
  if (value !== "") {
    let Addclass = value.split(" ");
    Addclass.forEach((c) => currentElement.classList.add(c));
    showclass();
    add.value = "";
  }
});
remove.addEventListener("blur", function () {
  let value = remove.value.trim().toLowerCase();
  if (value !== "") {
    let Remclass = value.split(" ");
    Remclass.forEach((c) => currentElement.classList.remove(c));
    showclass();
    remove.value = "";
  }
});

showclass();

//----------------- Assignment 3--------------------------------
let removePara = document.querySelector(".Paragraph");
removePara.remove();

let ourElement = document.querySelector(".our-element");

let start = document.createElement("div");
start.className = "start";
start.title = "Start Element";
start.setAttribute("data-value", "start");
start.textContent = "Start";

let end = document.createElement("div");
end.className = "end";
end.title = "End Element";
end.setAttribute("data-value", "End");
end.textContent = "End";

ourElement.before(start);
ourElement.after(end);

//----------------- Assignment 4--------------------------------
let elzero = document.querySelector(".elzero");
console.log(elzero.childNodes[4].textContent.trim());

//----------------- Assignment 5--------------------------------
let allElement = document.querySelectorAll("*");
allElement.forEach((ele) => {
  if (ele.textContent.trim() === "Element") {
    ele.addEventListener("click", function () {
      console.log(`This Is ${this.tagName}`);
    });
  }
});

//----------------- Assignment from 102 to 110 -------------------------
//----------------- Assignment 1--------------------------------
// let input = prompt("Print Number From - To", "Example: 5-20");

// let parts = input.split("-");
// let from = Number(parts[0]);
// let to = Number(parts[1])
// if(to>from){
//   for(let i =from; i<=to;i++){
//    console.log(i);
//   }
// }else{
//     for(let i =to; i<=from;i++){
//     console.log(i);
//   }
//   };

//----------------- Assignment 2--------------------------------
// function createPopup(){
//   let background = document.createElement("div");
//   let divv= document.createElement("div");
//   let h2= document.createElement("h2");
//   let p= document.createElement("p");
//   let btnclose= document.createElement("button");
//   h2.textContent="Welcome";
//   p.textContent="Welcome to Elzero Web School";
//   btnclose.textContent="X";

//    background.style.cssText = `
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0,0,0,0.6);
//   `;
//   divv.style.cssText = `
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: #fff;
//   padding: 20px;
//   text-align: center;
//   border-radius: 10px;
//   width: 300px;
//   position: relative;
// `;
//   btnclose.style.cssText = `
//   position: absolute;
//   top: 0px;
//   right: 0px;
//   background-color: red;
//   color: white;
//   border: none;
//   padding: 5px 10px;
//   cursor: pointer;
// `;
//   divv.append(h2,p,btnclose);
//   background.append(divv);
//   document.body.appendChild(background);

//   btnclose.onclick=function(){
//     background.remove();
//   }
// }
// setTimeout(createPopup,5000);

//----------------- Assignment 3--------------------------------
let parcount = document.createElement("h2");
parcount.textContent = "This is the Counter";
let counDiv = document.createElement("div");
counDiv.textContent = 10;

function counntdown() {
  counDiv.textContent--;
  if (counDiv.textContent === "0") {
    clearInterval(count);
  }
}
let count = setInterval(counntdown, 2000);
document.body.appendChild(parcount);
document.body.appendChild(counDiv);

//----------------- Assignment 4--------------------------------

// let paracount = document.createElement("h2");
// paracount.textContent= "Move to Elzero.org";
// let countDiv= document.createElement("div");
// countDiv.textContent=10;

// function countdown(){
//   countDiv.textContent--;
//   if(countDiv.textContent=== "0" ){
//     window.location.href="https://elzero.org/";
//   }
// }
// setInterval(countdown,2000);
// document.body.appendChild(paracount);
// document.body.appendChild(countDiv);

//----------------- Assignment 5--------------------------------

// let parcoun = document.createElement("h2");
// parcoun.textContent= " when counter = 5  ";
// let counDivv= document.createElement("div");
// counDivv.textContent=10;

// function counndown(){
//   counDivv.textContent--;
//   if(counDivv.textContent==="5" ){
//     window.open("https://elzero.org/", "_blank", "width=400,height=400,top= 500px,left=500px");
//   }
//    if(counDivv.textContent=== "0" ){
//     clearInterval(coun)
//   }
// }
// let coun = setInterval(counndown,2000);
// document.body.appendChild(parcoun);
// document.body.appendChild(counDivv);

//----------------- DOM Challenge -------------------------
let header = document.createElement("header");
let h1 = document.createElement("h1");
h1.textContent = "Elzero";
let ul = document.createElement("ul");
let li1 = document.createElement("li");
li1.textContent = "Home";
let li2 = document.createElement("li");
li2.textContent = "About";
let li3 = document.createElement("li");
li3.textContent = "Service";
let li4 = document.createElement("li");
li4.textContent = "Contact";
ul.append(li1, li2, li3, li4);
header.append(h1, ul);
document.body.prepend(header);
header.style.cssText =
  "display :flex; justify-content :space-between ; align-items:center;padding: 15px 30px";
h1.style.color = "#0ab348";
ul.style.cssText =
  " display: flex; gap :20px; list-style :none ; color: gray ; font-weight:bold";

let content = document.createElement("div");
content.className = "content";
for (let i = 1; i <= 15; i++) {
  let clas = document.createElement("div");
  clas.className = "clas";
  let myp = document.createElement("p");
  myp.textContent = `${i}`;
  let myspan = document.createElement("span");
  myspan.textContent = "Product";
  clas.append(myp, myspan);
  content.append(clas);
  clas.style.cssText =
    "margin:5px ; width : 30%; text-align:center; background:white;";
  myp.style.cssText = " font-size: 25px;font-weight: bold;";
  myspan.style.cssText = "font-size: 10px; color: gray; ";
}
header.after(content);
content.style.cssText =
  "display: flex; flex-wrap: wrap; margin:30px;justify-content:center ; background:rgb(226, 225, 225)";
let footer = document.createElement("div");
footer.className = "footer";
footer.textContent = "Copyright 2021";
content.append(footer);
footer.style.cssText =
  "width: 100%;text-align: center;padding: 10px 0; background-color: #0ab348; color: white; margin-top: 10px;";
