const student  = require("./01-module-caching");

const student1 = new student("Rahul");
console.log("Student 1 before:" + student1.getName());
student1.setName("Rohit");
console.log("Student 1 after:" + student1.getName());

const student2 = new student("Sabya"); // Everytime new instance is created.
console.log("Student 2 before:" + student2.getName());
student2.setName("Pinaki");
console.log("Student 2 after:" + student2.getName());