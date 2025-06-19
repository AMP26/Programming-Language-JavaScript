// Lexical Scope


// 1. Function Scope - 'var' 
// var is function-scoped, so it's accessible throughout the entire function, even inside blocks.
function functionScope() {
  var x = 10; // x is function-scoped
  if (true) {
    var y = 20; // y is still accessible outside this block because var has function scope
  }
  console.log(x); // 10
  console.log(y); // 20
}
functionScope();

// 2. Blocked Scope - 'let' & 'const' 
// 'let' and 'const' are block-scoped, meaning they are only accessible within the block where they are defined.
function blockScope() {
  let x = 10; // x is block-scoped
  if (true) {
    let y = 20; // y is block-scoped and only accessible inside this block
    console.log(x); // 10 - x is accessible because it's within the same function
    console.log(y); // 20 - y is accessible inside the block
  }
  console.log(x); // 10 - x is still accessible outside the block 
  // console.log(y); // ReferenceError: y is not defined - y is not accessible outside the block
}
blockScope();


// 3. Lexical Scope
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