//------------------ Assignments From 64 to 70-----------------------------
//Assignments 1
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let name = zName.split(" ");
    return `${name[0]} ${name[1][0].toUpperCase()}.`;
  }
  function ageWithMessage(zAge) {
    let age = zAge.split(" ")[0];
    return `Your Age Is ${age} `;
  }
  function countryTwoLetters(zCountry) {
    let country = zCountry.split(" ");
    return `You Live In ${zCountry.slice(0, 2).toUpperCase()}`;
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails();
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY





//Assignments 2
let itsMe = () => `Iam A Normal Function`;

console.log(itsMe());

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org"));





//Assignments 3
let checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble





//Assignments 4
function specialMix(...data) {
  let sum = 0;
  let x = false;
  for (let i = 0; i < data.length; i++) {
    let num = parseInt(data[i]);
    if (!isNaN(num)) {
      sum += num;
      x = true;
    }
  }
  return x ? sum : "All Is Strings";
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings




///------------------ Assignments From 71 to 78-----------------------------
//Assignments 1
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"]; // Elzero
let mi = mix
  .map(function (m) {
    return isNaN(parseInt(m)) ? m : "";
  })
  .reduce(function (acc, cur) {
    return acc + cur;
  });
console.log(mi);




//Assignments 2
let myStrings = "EElllzzzzzzzeroo"; // Elzero
let arr= myStrings.split("").filter(function(str,i,ar){
  return ar.indexOf(str) === i ? str : "";
}).join("");
console.log(arr);




//Assignments 3
let myArray = ["E", "l", "z", ["e", "r"], "o"];// Elzero
let result = myArray.reduce(function(acc, cur){

  return acc + (Array.isArray(cur) ? cur.join("") : cur)
});
console.log(result);



//Assignments 4
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];// [-1, -10, 10, 20, -5, -3]
let num = numsAndStrings
  .filter(function (n) {
    return !isNaN(parseInt(n));
  }).map(function(n){
    return -n;
  })
console.log(num);




//Assignments 5
let nums = [2, 12, 11, 5, 10, 1, 99];// 500
let red= nums.reduce(function(acc,curr){
  return curr % 2 ===0 ? acc*curr : acc+curr ;
},1);
console.log(red);





/*-----------Function Arrow Challenges----------------*/
// let names = function (...args) {
//   return `String [${args.join("], [")}], => Done !`;
// };
let names = (...args) => `String [${args.join("], [")}], => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => one + two + nums[0];
let calc = function (one, two, ...nums) {
  return one + two + nums[0];
};

console.log(calc(10, myNumbers[0], myNumbers[1])); // 80

/*-----------Higher Order Functions Challenges----------------*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
  .split(",")
  .filter(function (ele) {
    return isNaN(parseInt(ele)) && ele !== myString[--myString.length];
  })
  .map(function (ele) {
    return ele === "_" ? (ele = " ") : ele;
  })
  .join("")
  .slice(true);

console.log(solution); // Elzero Web School
