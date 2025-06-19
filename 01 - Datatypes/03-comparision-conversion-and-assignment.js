// Cases of comparision and conversion (or coercion)

console.log("1" == 1); // true - "==" converts string ["1"] to number then compares -> Implicit Conversion

console.log("1" === 1); // false - "===" checks the type. Here types are different so false.

console.log(true == "true"); // false

console.log(true === "true"); // false

console.log(true == 1); // true

console.log(true == "1"); // true;

console.log(false === 0); // false

console.log(+"1"); // Result in number 1. Converts string to number

console.log(+"abc"); // NaN - Not a Number

console.log(3 + 4); // Results in 7. Normal summation

console.log(3 + "4"); // Results in 34. String conversion - 3 will be converted to string

console.log("abc" + "def"); // String Concatenation

console.log(3 + +"4"); // Results in 7. +"4" - explictly gets converted to number

console.log(3 - "4"); // Results in -1. "4" is converted to a number implicitly.
// Note:  -, * or / in console.log() implicitly converts to a number

console.log(-"34") // Results in number -34. Implicit conversion


// a and b pointing to same memory location
let a = [1, 2, 11, 3];
let b = a;
console.log(a); // Result - [1, 2, 11, 3]
console.log(b); // Result - [1, 2, 11, 3]


// x and y pointing to different memory location
let x = [11, 22, 33, 44];
let y = x;
// x.length = 0; // x refers to same array as b so both x and y will be empty
x = []; // x completely refers to a different array
console.log(x); // Result - []
console.log(y); // Result - [1, 2, 11, 3] - y still pointing to [11, 22, 33, 44]


// u and v pointing to same memory location
let u = [55, 66, 77, 88];
let v = u;
u.length = 0;
console.log(a); // Result - []
console.log(b); // Result - []
