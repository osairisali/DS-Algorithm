// immediately invoked function to execute f()
var fibonacci = (function () {
  var memo = {};

  function f(n) {
    var value;

    if (n in memo) {
      value = memo[n];
    } else {
      if (n === 0 || n === 1) value = n;
      else value = f(n - 1) + f(n - 2);

      memo[n] = value;
    }

    return value;
  }

  return f;
})(); // execute immediately to return function f

// n-th number of fibonacci sequence
console.log(fibonacci(9));
// 34

// linear recursive with simple code
const fib = (n, lastlast = 0, last = 1) => {
  if (n === 0) return lastlast;
  if (n === 1) return last;
  return fib(n - 1, last, lastlast + last);
};

console.log(fib(9));
