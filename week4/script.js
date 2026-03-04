//---------------------- Assignment From 48 to 53 --------------------------------
// Assignment 1

let start = 10;
let end = 100;
let exclude = 40;
for (let i = start; i <= end; i += 10) {
  if (i == exclude) continue;
  console.log(i);
}
// Assignment 2
start = 10;
end = 0;
let stop = 3;
for (let i = start; i >= end; i--) {
  if (i < 10) {
    console.log("0" + i);
  } else console.log(i);
  if (i == stop) break;
}
// Assignment 3
start = 1;
end = 6;
let breaker = 2;
for (let i = start; i <= 6; i++) {
  console.log(i);
  for (let j = start; j < breaker; j++) {
    console.log("--" + " " + breaker);
    console.log("--" + " " + (breaker + breaker));
  }
}
// Assignment 4
let index = 10;
let jump = 2;

for (;;) {
  console.log(index);
  index -= jump;
  if (index < jump * jump) break;
}
// Assignment 5
start = 0;
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
for (let i = start; i < friends.length; i++) {
  if (friends[i].startsWith(letter.toUpperCase())) continue;
  console.log(`${++start} => ${friends[i]}`);
}
// Assignment 6
start = 0;
let swappedName = "elZerO";
let arr = "";
for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    arr += swappedName[i].toLowerCase();
  } else {
    arr += swappedName[i].toUpperCase();
  }
}
console.log(arr);

// Assignment 7
start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for (let i = ++start; i < mix.length; i++) {
  if (typeof mix[i] === typeof start) {
    console.log(mix[i]);
  }
}
//---------------------- Assignment From 54 to 56 --------------------------------
// Assignment 1
let friend = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
index = 0;
let counter = 0;
while (index < friend.length) {
  if (typeof friend[index] === typeof index) {
    index++;
    continue;
  }

  if (friend[index].startsWith("A")) {
    index++;
    continue;
  }
  console.log(`${++counter} => ${friend[index]}`);
  index++;
}
//---------------------- Assignment From 57 to 63 --------------------------------
// Assignment 1
function sayHello(theName, theGender) {
  if (theGender == "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender == "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// Assignment 2
function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log("Second Number Not Found");
    return;
  }
  switch (operation) {
    case "add":
      console.log(firstNum + secondNum);
      break;
    case "subtract":
      console.log(firstNum - secondNum);
      break;
    case "multiply":
      console.log(firstNum * secondNum);

      break;
    default:
      console.log(firstNum + secondNum);
  }
}
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

// Assignment 3
function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`${theAge * 12} Months`);
    console.log(`${theAge * 52} Weeks `);
    console.log(`${theAge * 365} Days `);
    console.log(`${theAge * 365 * 24} Hours `);
    console.log(`${theAge * 365 * 24 * 60} Minutes `);
    console.log(`${theAge * 365 * 24 * 60 * 60} Second `);
  } else {
    console.log("Age Out Of Range");
  }
}

ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

// Assignment 4
function checkStatus(a, b, c) {
  let name;
  let age;
  let status;

  if (typeof a === "string") name = a;
  if (typeof a === "number") age = a;
  if (typeof a === "boolean") status = a;

  if (typeof b === "string") name = b;
  if (typeof b === "number") age = b;
  if (typeof b === "boolean") status = b;

  if (typeof c === "string") name = c;
  if (typeof c === "number") age = c;
  if (typeof c === "boolean") status = c;

  if (status === true) {
    console.log(`Hello ${name}, Your Age is ${age},You Are Available For Hire`);
  } else {
    console.log(
      `Hello ${name}, Your Age is ${age},You Are Not Available For Hire`,
    );
  }
}

checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// Assignment 5

function createSelectBox(startYear, endYear) {
  let select = document.createElement("select");

  for (let year = startYear; year <= endYear; year++) {
    select.innerHTML += `<option value="${year}">${year}</option>`;
  }

  document.body.appendChild(select);
}
createSelectBox(2000, 2021);

// Assignment 6
function multiply(...args) {
  let result = 1;

  for (let value of args) {
    if (typeof value === "number") {
      result *= Math.floor(value);
    }
  }
  console.log(result);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
