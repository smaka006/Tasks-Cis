//----------------- Assignments from 111 to 114 ---------------------------------
//----------------- Assignment 1---------------------------------
let font = document.getElementById("fonts");
let color = document.getElementById("colors");
let size = document.getElementById("sizes");

font.onchange = function () {
  document.body.style.fontFamily = this.value;
  localStorage.setItem("font", this.value);
};

color.onchange = function () {
  document.body.style.color = this.value;
  localStorage.setItem("color", this.value);
};

size.onchange = function () {
  document.body.style.fontSize = this.value + "px";
  localStorage.setItem("size", this.value);
};

if (localStorage.getItem("font")) {
  document.body.style.fontFamily = localStorage.getItem("font");
  font.value = localStorage.getItem("font");
}

if (localStorage.getItem("color")) {
  document.body.style.color = localStorage.getItem("color");
  color.value = localStorage.getItem("color");
}

if (localStorage.getItem("size")) {
  document.body.style.fontSize = localStorage.getItem("size") + "px";
  size.value = localStorage.getItem("size");
}

//----------------- Assignment 2---------------------------------
let name = document.getElementById("name");
let age = document.getElementById("age");
let email = document.getElementById("email");
let country = document.getElementById("country");

name.onblur = function () {
  sessionStorage.setItem("name", this.value);
};
age.onblur = function () {
  sessionStorage.setItem("age", this.value);
};
email.onblur = function () {
  sessionStorage.setItem("email", this.value);
};
country.onchange = function () {
  sessionStorage.setItem("country", this.value);
};

if (sessionStorage.getItem("name")) {
  name.value = sessionStorage.getItem("name");
}
if (sessionStorage.getItem("age")) {
  age.value = sessionStorage.getItem("age");
}
if (sessionStorage.getItem("email")) {
  email.value = sessionStorage.getItem("email");
}
if (sessionStorage.getItem("country")) {
  country.value = sessionStorage.getItem("country");
}

//----------------- Assignments from 115 to 122 ---------------------------------
//----------------- Assignment 1---------------------------------
let myNumbers = [1, 2, 3, 4, 5];

// let [a,b,c,d,e]=myNumbers;

// console.log(a * e); // 5

//----------------- Assignment 2---------------------------------
let mySkills = [
  "HTML",
  "CSS",
  "JavaScript",
  ["PHP", "Python", ["Django", "Laravel"]],
];

// [a,b,c,[d,e,[f,g]]]=mySkills;
// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

//----------------- Assignment 3---------------------------------
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

//  [,a,b]=arr3;
//  [c,,]=arr1;

// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed

//----------------- Assignment 4---------------------------------

// const member = {
//   age: 30,
//   working: false,
//   country: "Egypt",
//   hobbies: ["Reading", "Swimming", "Programming"],
// };
// const {
//   age: a,
//   working: w,
//   country: c,
//   hobbies: [h1, , h3],
// } = member;

// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

// console.log(`I Live in ${c}`);
// I Live in Egypt

// console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming
//----------------- Assignment 5---------------------------------

const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

const {
  title: t,
  developer: d,
  releases: {
    "Oath In Felghana": [u, j],
    "Ark Of Napishtim": { US: u_price, JAP: j_price },
    Origin: or,
  },
} = game;
const o = "Oath In Felghana";
const a = "Ark Of Napishtim";

console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim

console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD

//----------------- Assignment 6---------------------------------
// let chosen = 1;

// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];

// let { title, age, available, skills: [, lastSkill] } = myFriends[chosen - 1];
// console.log(title);
// console.log(age);
// console.log(available ? "Available" : "Not Available");
// console.log(lastSkill);
