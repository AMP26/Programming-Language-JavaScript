console.log("Write a higher-order function that takes a function and a number n, and returns a new function that can be called at most n times.");

function highOrderFunc(func) {
func(10);
}

function deCount(num, count = 1) {
  if(count > num) {
    console.log("Limit Reached");
    return;
  }
  
  console.log(count);
  return deCount(num, ++count);
}

highOrderFunc(deCount);