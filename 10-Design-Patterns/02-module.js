const calc = (function () {

  return {
    getSum: function(a, b) {
      return a + b;
    },
    getDiff: function(x, y) {
      return y - x;
    }
  };
})();

console.log("Sum: " + calc.getSum(1, 2));
console.log("Difference: " + calc.getDiff(2, 11));