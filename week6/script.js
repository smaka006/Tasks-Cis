//---------------------Assignments from 79 to 85---------------------------------------------------------
//Assignment 1
let member = {
  name: "Elzero",
  age: "38",
  country: "Egypt",
  fullDetails: function () {
    return ` My Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`;
  },
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt

//Assignment 2
let objMethodOne = {
  property: "Method One",
};
console.log(objMethodOne.property); // "Method One"

let objMethodTwo = new Object({
  property: "Method Two",
});
console.log(objMethodTwo.property); // "Method Two"

let objMethodThree = Object.create({
  property: "Method Three",
});
console.log(objMethodThree.property); // "Method Three"

let objMethodFour = Object.assign({
  property: "Method Four",
});
console.log(objMethodFour.property); // "Method Four"

//Assignment 3
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject = Object.assign({ a }, threeNums, twoNums);

console.log(finalObject);

//Assignment 4
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

let objectLength = Object.keys(myFavGames).length;

for (let i = 0; i < objectLength; i++) {
  let game = Object.keys(myFavGames)[i];
  console.log(`The Game Name Is ${game} `);
  console.log(`The Publisher Is ${myFavGames[game].publisher}`);
  console.log(`The Price Is ${myFavGames[game].price}`);
  if (myFavGames[game].bestThree) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[game].bestThree.one}`);
    console.log(`Second => ${myFavGames[game].bestThree.two}`);
    console.log(`Third => ${myFavGames[game].bestThree.three}`);
  }
  console.log("#".repeat(20));
}

// //---------------------Assignments from 86 to 93---------------------------------------------------------
// //Assignment 1
let ElmentbyId = document.getElementById("elzero");
let Elmentbytag = document.getElementsByTagName("div");
let Elmentbyclass = document.getElementsByClassName("element");
let ElmentbyName = document.getElementsByName("js");

let ElmentbyQueryE1 = document.querySelector("div");
let ElmentbyQueryE2 = document.querySelector(".element");
let ElmentbyQueryE3 = document.querySelector("#elzero");
let ElmentbyQueryE4 = document.querySelector("[name='js']");

let ElmentbyQueryAllE1 = document.querySelectorAll("div");
let ElmentbyQueryAllE2 = document.querySelectorAll(".element");
let ElmentbyQueryAllE3 = document.querySelectorAll("#elzero");
let ElmentbyQueryAllE4 = document.querySelectorAll("[name='js']");

// //Assignment 2
// let imgs = document.querySelectorAll("img");
// for (let i=0;i<imgs.length;i++){
//   imgs[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//   imgs[i].alt = "Elzero Logo";
//   console.log(imgs[i].parentElement.outerHTML);
// }

// //Assignment 3
let input = document.querySelector("input");
let resul = document.querySelector(".result");
input.oninput = function () {
  resul.innerHTML = `${input.value} USD Dollar = ${(this.value * 15.6).toFixed(2)} Egyptian Pound `;
};

// //Assignment 4
let el1 = document.querySelector(".one");
let el2 = document.querySelector(".two");
let temp1 = el1.title;
let temp2 = el2.title;

el1.title = temp2;
el2.title = temp1;

let iner1 = el1.innerHTML;
let iner2 = el2.innerHTML;
el1.innerHTML = iner2;
el2.innerHTML = iner1 + " " + el2.attributes.length;
console.log(el1.outerHTML);
console.log(el2.outerHTML);

console.log("##################################### ");
//Assignment 5
let imges = document.querySelectorAll("img");
for (let i = 0; i < imges.length; i++) {
  if (imges[i].hasAttribute("alt")) {
    imges[i].alt = "Old";
  } else {
    imges[i].setAttribute("alt", "Elzero New");
  }
  console.log(imges[i].outerHTML);
}
console.log("##################################### ");
//Assignment 6
let form = document.querySelectorAll("form")[1];
let result = document.querySelector(".results");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  result.innerHTML = "";
  const ninput = form.querySelector('input[name="elements"]');
  const txinput = form.querySelector('input[name="texts"]');
  const typeselect = form.querySelector('select[name="type"]');

  for (let i = 1; i <= ninput.value; i++) {
    let el = document.createElement(typeselect.value.toLowerCase());
    el.className = "box";
    el.id = `id-${i}`;
    el.title = "Element";
    el.textContent = txinput.value;
    result.appendChild(el);
  }
  let boxes = result.querySelectorAll(".box");
  boxes.forEach((box) => console.log(box.outerHTML));
});
