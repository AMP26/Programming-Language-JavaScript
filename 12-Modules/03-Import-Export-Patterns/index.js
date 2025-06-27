// const clacFn = require("./all-patterns.js") 

// console.log("Welcome to modules!");

// const sum = clacFn(2, 3);
// console.log(sum);

const calcFn = require("./all-patterns.js");
// console.log(calcFn.add(5, 6));
// console.log(calcFn.minus(7, 9));

const{add, minus} = calcFn
console.log(calcFn.add(5, 6));
console.log(calcFn.minus(7, 9));

