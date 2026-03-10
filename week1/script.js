//------------------- Assignments from 1 to 9-------------------------
//------------------------- Assignment 1------------------------------------
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <title>Learn JavaScript</title>
//     <script>

/* ############  code one will not work 
    because the java script code run before the Html element with id"el is loaded
     ############  */

//    getElementById("el").style.color = "red";
//     </script>
//     <script>

/* #########  Code Two works because it waits for the page to fully load
    ###############    using window.onload. */

//       window.onload = function () {
//         document.getElementById("el").style.color = "red";
//       };
//     </script>
//   </head>
//   <body>
//     <h1 id="el">Page Title</h1>
//     <script>

/* ##############    Code Three works 
    #############  because the script is placed after the element in the body.*/

//       document.getElementById("el").style.color = "red";
//     </script>
//   </body>
// </html>
//------------------------- Assignment 2------------------------------------
let el = document.createElement("h1");
el.textContent = "Elzero";
el.style.color = "blue";
el.style.fontSize = "80px";
el.style.fontWeight = "bold";
el.style.textAlign = "center";
el.style.fontFamily = "Arial";

document.body.appendChild(el);


//------------------------- Assignment 3------------------------------------
console.log(
  "%cElzero %cWeb %cSchool",
  "color:red; font-size:40px;",
  "color:green; font-size:40px; font-weight:bold;",
  "color:blue; font-size:40px;",
);


//------------------------- Assignment 4------------------------------------
console.group("Group 1");
console.log("message one");
console.log("message two");
console.group("Child Group");
console.log("message one");
console.log("message two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");

console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("message one");
console.log("message two");
console.groupEnd();


//------------------------- Assignment 5------------------------------------
console.table(["Elzero","Ahmed","Sameh","Gamal","Aya"]);


//------------------------- Assignment 6------------------------------------
// console.log("Iam In Console");
// document.write("Iam In Page");

/* console.log("Iam In Console");
document.write("Iam In Page"); */

//------------------- Assignments from 10 to 17-------------------------
//------------------------- Assignment 1------------------------------------
let NumberOne=10;
let NumberTwo=20;

console.log(NumberOne+""+NumberTwo); // Normal Concatenate => 1020
console.log(typeof(NumberOne+""+NumberTwo)); // Normal Concatenate => String
console.log(`${NumberOne}${NumberTwo}`); // Template Literals Way => 1020
console.log(typeof(`${NumberOne}${NumberTwo}`)); // Template Literals Way => String

console.log(NumberTwo+"\n"+NumberOne);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${NumberTwo}\n${NumberOne}`);
/*
Template Literals Way
  20
  10
*/

//------------------------- Assignment 2------------------------------------
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object



//------------------------- Assignment 3------------------------------------
console.log("I'm In\n\\\\ \nLove \\\\ \"\"\" '''\n++ With ++\n\\\"\"\"\\\"\"\"\n\"\"JavaScript\"\"'' ")


//------------------------- Assignment 4------------------------------------
let a = 21;
let b = 20;
let c="_"+b+""+a;
console.log(`_${a}${c.repeat(3)}_${b}_`); // _21_2021_2021_2021_20_

