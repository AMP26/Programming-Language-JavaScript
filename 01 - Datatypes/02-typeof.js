let v = 16; // Number

let w = "abc"; // String

let x = true; // Boolean

let y = null; // Object - Variable is assigned null.

let z; // Undefined - Variable is not assigned with anything


// typeof()

console.log(typeof(v)); // Number

console.log(typeof(w)); // String

console.log(typeof(x)); // Boolean

console.log(typeof(y)); // Object

console.log(typeof(z)); // Undefined


// typeof(typeof()) - is always string

console.log(typeof(typeof(v))); // String

console.log(typeof(typeof(w))); // String

console.log(typeof(typeof(x))); // String

console.log(typeof(typeof(y))); // String

console.log(typeof(typeof(z))); // String

let a = 10, b = a = typeof b; // Undefined