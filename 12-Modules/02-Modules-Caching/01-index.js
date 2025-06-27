const student = require("./01-module-caching.js"); // This is loaded and cached((remembered)!

console.log(student.getName());
student.setName("Ava"); // The name changed and cached
console.log(student.getName());

// delete require.cache[require.resolve("./module-caching.js")]; // We add this line to delete cache

const newStudent = require("./01-module-caching.js"); // It will load same object as line 1 if line 7 is not executed

// If line 7 is executed then "Ron" will be printed instead of "Ava"
console.log(newStudent.getName()); // "Ava" will be logged again instead of "Ron" if line 7 not executed
