let x = 1; 
const y = 2; 
// let & const - Block scoped.
// Not available in global space i.e. window.
// Temporal Dead Zone - refers to the time between declaration and initialization, where let/const variables can't be accessed.
// Reference error if accessed before initialization.
// They cannot be accessed before initialization.
// Use "const" if the values are not going to change.
// Use "let" if values are to be changed after.
// Suggested to declare variable at top of code to avoid Temporal Dead Zone.


var z = 3; 
// var - Function scoped.
// It will first be initialized with undefined.
// Before execution the memory is assigned.
// Available in global i.e. window.
// Hoisting - Memory alocated before initializng it but it can be accessed.
// Avoid using "var".


// More Detail on Temporal Dead Zone:
// It refers to a period of time during the execution of your code when variables that are declared 
// with let or const cannot be accessed, even though they have been declared.
// This happens before the variable is assigned a value, and trying to use it in this "dead zone" will result in an error.


// Not recommended but we can do this
var let = 9;
console.log("let: ", let);