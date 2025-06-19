// Functions are called First Class Citizens


// Function Declaration
function addNum(a, b) { return a + b; }
let sum = addNum(30, 40);
console.log("Summation: " + sum);
console.log("Summation: " + addNum(5, 6));


// Function Expression
let subNum = function(a, b) { return b - a; }
console.log("Substraction: " + subNum(20, 60));


// Arrow Function
let mulNum = (a, b) => { return a * b; }
console.log("Multiplication: " + mulNum(10,20));


// typeof a function is function
console.log(typeof(addNum)); // Function
console.log(typeof(addNum())); // Number - addNum() - returns a number


function fn() { }
console.log(fn()); // Undefined
console.log(typeof(fn())); // Undefined


let m = 21;
function printNum() { console.log(m); }
printNum(); // 21 will be printed as "m" is a global variable.


function printNum2() { 
  let m = 10;
  console.log(m);
}
printNum2(); // 10 will be printed as local variable has more priority.


function printNum3() { 
  console.log(m); 
  var m = 15;
}
printNum3(); // undefined - Due to hoisting.


function printNum4() { 
  // console.log(m); 
  let m = 15;
}
printNum4(); // Error: Cannot access 'm' before initialization


// Callbacks - A function Passing a function as a parameter to another function.
function callBack(a) { console.log(a()); }

callBack(function() { console.log("Function as Parameter Passed!"); });


function callBack1(c) {
  console.log("Hello " + c());
  // c();
}

let printFn = function() { return "World!"; }

callBack1(printFn); // If we call printFn() here it will give error as c() is not defeined.


// IIFE - Immidiately Invoked Function Expression
(function() {
  console.log("Annonymous Function Invoked!"); 
})()