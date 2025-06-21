function add(x, y, z) {
  return function(y) {
    return function(z) {
      console.log("x: " + x + ", y: " + y + ", z: " + z);
      console.log(x + y + z);
    }
  }
}

let result = add(10)(20)(30);