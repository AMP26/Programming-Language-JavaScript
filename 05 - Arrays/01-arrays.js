// Arrays are dynamic in nature. It stores heterogenous elements. Start index is 0.

// Declaration
let arr = [];
let arr1 = [7, 8, 9, 10];
let arr2 = new Array(11); // We can add more values to the Array.

let arr3 = [1, 2, 3, "Qwerty", true, false]; // Valid Array

console.log(typeof(arr3)); // Object

console.log(arr3[3]); // "Qwerty"

// arr3[20] = "x"
// console.log(arr3); // undefined will be stored after the element "false" till 20th index.

console.log(arr3[20]);

console.log("Length of Array: " + arr3.length); // 

arr3.push(9); // Element will be added at end of the Array
arr3.unshift(88); // Element will be added at begining of the Array.

console.log(arr3);

arr3.pop();
console.log("Removed element from start of array: " + arr3);
arr3.shift();
console.log("Removed element from end of array: " + arr3);


let hetArr = [3, 6, 9, "Hello", function() {console.log("Qwerty");}]
console.log("Heterogenous Array Result: " + hetArr);

// Slice
console.log("Slice function: ");
let a = [0, 1, 2, 3, 4, 5, 6];
console.log(a.slice(3, 5)); // start is inclusive and end is not inclusive. 
console.log(a.slice(1)); // Removes elements and assumes start as 0 and end as 1


let aarr = [9, 8, 7, 6, 5, 4];
let arr1 = [...aarr]; // ... is spread operator
console.log(arr1);
