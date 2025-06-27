// Summation
const add = function(x, y) {
  return x + y;
}

let sum = add(10, 20);

console.log("Sum:" + sum);


// Substract
const minus = function(x, y) {
  return y - x;
}

let sub = minus(40, 20);

console.log("Sub: " + sub);

module.exports = add; // Only add function is exposed