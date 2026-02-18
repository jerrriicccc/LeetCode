// // 2620. Counter

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  let count = n;

  return function () {
    return count++;
  };
};

const counter = createCounter(10);

console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter()); // 12

const counter1 = createCounter(-2);

console.log(counter1()); // -2
console.log(counter1()); // -1
console.log(counter1()); // 0
console.log(counter1()); // 1
console.log(counter1()); // 2
