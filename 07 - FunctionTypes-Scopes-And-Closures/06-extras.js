console.log("Write a function that generates a sequence of functions to increment a counter, demonstrating closures and scope.");

function fn1() {
  let count = 0;

  function fn2() {
    return ++count;
  }
  return fn2;
}

let func = fn1();
console.log(func());
console.log(func());
console.log(func());
console.log(func());
console.log(func());

console.log("Create a function that generates a series of functions to increment a counter. Each function should increment the counter by a different amount.")
function outFn(count) {
  let c = count;

  return {
    func1: function fn1() {
    return ++c;
    },
    func2: function fn2() {
      return c+= 2;
    }
  }
}

let countFunc = outFn(10);
console.log(countFunc.func1());
console.log(countFunc.func2());