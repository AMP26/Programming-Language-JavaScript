class Student {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

// module.exports = new Student("Ron"); // Module caching - 01-index.js

module.exports = Student; // By doing this aslo we can generate new instance everytime - 02-index.js