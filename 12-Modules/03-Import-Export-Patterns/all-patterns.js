// Pattern  - 1
// Summation
// const add = function(x, y) {
//   return x + y;
// }

// let sum = add(10, 20);

// console.log("Sum:" + sum);

// module.exports = add; 



// Pattern  - 2
// Summation
// module.exports = function(x, y) {
//   return x + y;
// } // Works same as Pattern - 1



// Pattern  - 3
// Summation
// const add = function(x, y) {
//   return x + y;
// }

// Substract
// const minus = function(x, y) {
//   return y - x;
// }

// module.exports = {
//   add: add, // can only write key if key and value is same
//   minus: minus
// };



// Pattern  - 4
// Summation
// module.exports.add = function(x, y) {
//   return x + y;
// }

// // Substract
// module.exports.minus = function(x, y) {
//   return y - x;
// }



// Pattern  - 5 - Not recommended
// Summation
// exports.add = function(x, y) {
//   return x + y;
// }

// // Substract
// exports.minus = function(x, y) {
//   return y - x;
// }