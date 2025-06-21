function fibo(n, cache = []) {
  if(cache[n] !== undefined) {
    return cache[n];
  }

  let result;
  if(n <= 2)
    result = 1;
  else
    result = fibo(n - 1, cache) + fibo(n - 2, cache);

  cache[n] = result;
  return result;
}

console.log(fibo(3));