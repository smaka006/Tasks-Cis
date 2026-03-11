//-----------------Assignments From 18 to 22---------------------------
//-------------------------Assignments 1 ------------------------------

console.log(10 * 20 - 15 % 3 + 190 + 10 - 400); // 0

//-------------------------Assignments 2 ------------------------------
let num = 3;
console.log(num+num); // 6
console.log(num*num-num); // 6
console.log(num && num+num); // 6
console.log(num + +true + +true + +true); // 6
console.log(+`${num+num}`); // 6
console.log(num * (!!num + !!num)); // 6

//-------------------------Assignments 3 ------------------------------
let num2 = "10";
console.log(parseInt(num2)+parseInt(num2)); // 20
console.log(parseInt(num2) && parseInt(num2)+parseInt(num2)); // 20
console.log(parseInt(num2) * (+true + +true)); // 20
console.log(+`${parseInt(num2)+parseInt(num2)}`); // 20

//-------------------------Assignments 4 ------------------------------
let points = 10;
points+=true+true+true
console.log(points); // 13

points-=true+true+true+true+true
console.log(points); // 8;


//-----------------Assignments From 23 to 26---------------------------
//-------------------------Assignments 1 ------------------------------
console.log(100000);
console.log(100_000);
console.log(1e5);

console.log(5e4 + 5e4); 
console.log(200000 - 100000); 
console.log(1000000 / 10); 

console.log(100000 * true);
console.log(10 ** 5);
console.log(+"100000");

console.log(100000 << 0);
console.log(1000000 % 900000);
console.log(+("1e5"));

console.log(parseInt("100000"));
//-------------------------Assignments 2 ------------------------------
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991


//-------------------------Assignments 3 ------------------------------
console.log(Number.MAX_SAFE_INTEGER.toString().length);


//-------------------------Assignments 4 ------------------------------
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+(parseFloat(myVar).toFixed(2))); // 100.57


//-------------------------Assignments 5 ------------------------------
let num3 = 10;
console.log(Number.isInteger(num3) + Number.isInteger(num3)); // 2

//-------------------------Assignments 6 ------------------------------
let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(flt | false); // 10


//-------------------------Assignments 7 ------------------------------
console.log(Math.floor(Math.random()*5)); // 0 || 1 || 2 || 3 || 4


//-----------------Assignments From 27 to 30---------------------------
//-------------------------Assignments 1 ------------------------------
let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.at(0).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName[0].toLowerCase().repeat(3)); // eee



//-------------------------Assignments 2 ------------------------------
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True







