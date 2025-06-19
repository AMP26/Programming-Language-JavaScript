// Hoisting
let a = 10;
function funcHoist() {
  // let b; - This is how JavaScript will read from start
  console.log("Value of a: " + a);
  console.log("Value of b: " + b);
  let a = 2; // This is how JavaScript will read from start
  b = 10;
}

funcHoist();