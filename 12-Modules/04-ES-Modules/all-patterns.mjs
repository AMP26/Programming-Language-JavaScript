// Pattern  - 1
// Summation
// const add = function(x, y) {
//   return x + y;
// }

// export default add; 



// Pattern  - 2
// Summation
// export default function(x, y) {
//   return x + y;
// } // Works same as Pattern - 1



// Pattern  - 3
// Summation
// const add = function(x, y) {
//   return x + y;
// }

// //Substract
// const minus = function(x, y) {
//   return y - x;
// }

// export default {
//   add: add, // can only write key if key and value are same
//   minus: minus
// };



// Pattern  - 4
// Summation
export const add = function(x, y) {
  return x + y;
}

// Substract
export const minus = function(x, y) {
  return y - x;
}



// Pattern  - 5 - Not recommended
// Summation
// exports.add = function(x, y) {
//   return x + y;
// }

// // Substract
// exports.minus = function(x, y) {
//   return y - x;
// }