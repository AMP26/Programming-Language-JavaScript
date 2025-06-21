// Function Scope
// var is function-scoped, so it's accessible throughout the entire function, even inside blocks
console.log("Function Scope:")
function functionScope() {
  var x = 10; // x is function-scoped
  if (true) {
    var y = 20; // y is still accessible outside this block because var has function scope
  }
  console.log("x " + x); // 10
  console.log("y " + y); // 20
}
functionScope();

// Blocked Scope
// 'let' and 'const' are block-scoped, meaning they are only accessible within the block where they are defined
console.log("Blocked Scope: ")
function blockedScope() {
  let x = 20;
  if(true) {
    let y = 30;
  }
  console.log("x " + x); // 20
  console.log("y " + y); // Reference Error - y is not defined -> y is not defined out of the block
}

// 3. Local and Global Scope
// Comment local 'a' the value of 'a' will be changed to 5 i.e. outside of function 'a' is declared. Same applies on var and const
// Local variable priority is high
function localAndGlobalScope() {
  let a = 10; // 'a' is declared locally inside chk function
  console.log("I am a: " + a); // Accesses the local 'a'
  console.log("I am b: " + b); // // 'b' is accessed from the outer (global) scope
}
let b = 15; // 'b' is declared in the global scope
let a = 5;  // 'a' is declared in the global scope

localAndGlobalScope();