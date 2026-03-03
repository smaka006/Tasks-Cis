console.log(100 == "100"); // true
console.log(100 < 1000); // true
console.log(110 > 100 > 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(-50 < +"-40"); // true
console.log(-10 < -"-40"); // true
console.log("10" == 10); // true
console.log(20 > false); // true
//----------------------------------------------
let num1 = 10;
let num2 = 20;

console.log(num1 < num2); // true
console.log(num2 > num1); // true
console.log(num1 != num2); // true
console.log(num2 >= num1); // true
console.log(num1 <= num2); // true
console.log(Boolean(num1)); // true
//-------------------------------------------------
let a = 20;
let b = 30;
let c = 10;

console.log((a < b && a > c) || a < b); // true
console.log(a != b && a != c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true

//-------------------------------------------------
let num = 9;
// let num=20;
// let num=110;
if (num < 10) {
  console.log("00" + num);
} else if (num < 100) {
  console.log("0" + num);
} else {
  console.log(num);
}
//-------------------------------------------------

let num3 = 9;
let str = "9";
let str2 = "20";

if (num3 == str) {
  console.log(`${num3} Is The Same Value As ${str}`);
}
if (num3 == str && typeof num3 !== typeof str) {
  console.log(`${num3} Is The Same Value As ${str} But Not The Same Type`);
}
if (num3 != str2 && typeof num3 !== typeof str2) {
  console.log(`${num3} Is Not The Same Value Or  The Same Type As ${str2}`);
}
if (str != str2 && typeof str == typeof str2) {
  console.log(`${str} Is The Same Type As ${str2} But Not The Same Value `);
}
//-------------------------------------------------
let num4 = 10;
let num5 = 30;
let num6 = "30";

// السطر الأول
if (num6 > num4 && typeof num6 !== typeof num4) {
  console.log(
    `${num6} Is Larger Than ${num4} And Type ${typeof num6} Not The Same Type As ${typeof num4}`,
  );
}

// السطر الثاني
if (num6 > num4 && num6 == num5 && typeof num6 !== typeof num5) {
  console.log(
    `${num6} Is Larger Than ${num4} And Value Is The Same As ${num6} And Type ${typeof num6} Not The Same Type As ${typeof num5}`,
  );
}

// السطر الثالث
if (
  num6 !== num4 &&
  typeof num6 !== typeof num4 &&
  typeof num6 !== typeof num5
) {
  console.log(
    `${num6} Value And Type Is Not The Same As ${num4} And Type ${typeof num6} Is Not The Same As ${typeof num5}`,
  );
}

//-------------------------------------------------

let nu1 = 20;
let nu2 = 9;
let nu3 = 20;
let nu4 = 52;

if (nu1 > nu2) {
  console.log("True");
} else {
  console.log("False");
}

if (nu1 > nu2 && nu1 < nu4) {
  console.log("True");
} else {
  console.log("False");
}

if (nu1 > nu2 && nu1 === nu3) {
  console.log("True");
} else {
  console.log("False");
}

if (nu1 + nu2 < nu4) {
  console.log("True");
} else {
  console.log("False");
}

if (nu1 + nu3 < nu4) {
  console.log("True");
} else {
  console.log("False");
}

if (nu1 + nu2 + nu3 < nu4) {
  console.log("True");
} else {
  console.log("False");
}

if (nu4 - (nu1 + nu3) + nu2 === 21) {
  console.log("True");
} else {
  console.log("False");
}

//-------------------------------------------------
let day= " Friday ";
day = day.trim();
day= day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();

switch(day){
  case "Friday":
  case "Saturday":
  case "Sunday" :
      console.log("No Appointments Available");
      break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  default:
    console.log("Its Not A Valid Day");
}
//-------------------------------------------------
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let s = 3;
console.log(myFriends.slice(false, s));
console.log(myFriends.splice(false, s));
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
console.log(friends.slice(1,3)); 
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = arrTwo.concat(arrOne).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
//-------------------------------------------------
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].slice(2).toUpperCase()); // ZERO

//-------------------------------------------------
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
if (haystack.includes(needle)) {
    console.log("Found");
}
if (haystack.indexOf(needle) !== -1) {
    console.log("Found");
}
if (haystack.find(el => el === needle)) {
    console.log("Found");
}
//-------------------------------------------------
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = arr2[arr2.indexOf("F")].toLowerCase() +arr1.pop().toLowerCase() + arr2.pop().toLowerCase();

console.log(allArrs); // fxy
// -----------------if challenge -----------------------
// write eith ternary if syntax

// let a = 10;
// if (a < 10) {
//   console.log(10);
// } else if (a >= 10 && a <= 40) {
//   console.log("10 To 40");
// } else if (a > 40) {
//   console.log("> 40");
// } else {
//   console.log("Unknown");
// }

// sol

a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
    ? console.log("10 To 40")
    : a > 40
      ? console.log("> 40")
      : console.log("Unknown"); //10 To 40

//---------------------------------------------------------------------

let st = "Elzero Web School";
// if ("????"==="34"){
//     console.log("Good")
// }
if ((st.length * 2).toString() === "34") {
  console.log("Good");
}

//----------------------------------------------------------------------

// if ("????"==="w"){
//     console.log("Good")
// }

if (st[st.indexOf("W")].toLowerCase() === "w") {
  console.log("Good");
}

//----------------------------------------------------------------------

// if ("????"!=="string"){
//     console.log("Good")
// }

if (st.length !== "string") {
  console.log("Good");
}

//----------------------------------------------------------------------

// if ("????"==="number"){
//     console.log("Good")
// }
if (typeof st.length === "number") {
  console.log("Good");
}

//----------------------------------------------------------------------

// if ("????"==="ElzeroElzero"){
//     console.log("Good")
// }
if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}

// -----------------Switch challenge -----------------------

let job = "manager";
let salary = 0;
// if(job==="manager"){
//   salary=8000;
// } else if(job==="IT" || job ==="Support"){
//   salary=6000;
// } else if(job==="Developer" || job ==="Designer"){
//   salary=7000;
// }else{
//   salary=4000;
// }

switch (job) {
  case "manager":
    salary = 8000;
    break;

  case "IT":
  case "Support":
    salary = 6000;
    break;

  case "Developer":
  case "Designer":
    salary = 7000;
    break;

  default:
    salary = 4000;
}
console.log(salary);
// ------------------------------------------------------------
let holidays = 0;
let money = 0;
// switch(holidays){
//   case 0:
//     money=5000;
//     console.log(`My Money is ${money}`);
//     break;
//    case 1:
//    case 2:
//     money=3000;
//     console.log(`My Money is ${money}`);
//     break;
//     case 3:
//     money=2000;
//     console.log(`My Money is ${money}`);
//     break;
// }

if (holidays === 0) {
  money = 5000;
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
} else if (holidays === 3) {
  money = 2000;
}

console.log(`My Money is ${money}`);

// -----------------ِArray challenge -----------------------
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "osama", "Gamal", "Ameer"];
console.log(my.slice(zero, ++counter).reverse()); //['osama', 'Elham', 'Mazero', 'Ahmed']
console.log(my.slice(my.indexOf("Mazero"), --counter).reverse()); //['Elham', 'Mazero']
console.log(my[--counter].slice(zero, counter) + my[++zero].slice(counter)); //Elzero
let count2 = counter + counter; //4
console.log(
  my[zero].slice(count2, ++count2) + my[zero].slice(count2).toUpperCase(),
); //rO
