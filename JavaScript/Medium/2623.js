// 2623. Memoize

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let cache = new Map();
  const memoized = function (...args) {
    let key = args.join(",");
    if (cache.has(key)) {
      return cache.get(key);
    }
    let result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
  return memoized;
}

// Example 1 - sum
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});

console.log("--- Example 1 ---");
console.log(memoizedFn(2, 2)); // 4
console.log(memoizedFn(2, 2)); // 4 (cached)
console.log(callCount); // 1
console.log(memoizedFn(1, 2)); // 3
console.log(callCount); // 2

// Example 2 - factorial
let callCount2 = 0;
const factorial = memoize(function (n) {
  callCount2 += 1;
  return n <= 1 ? 1 : n * factorial(n - 1);
});

console.log("--- Example 2 ---");
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(2)); // 2 (cached)
console.log(callCount2); // 2
console.log(factorial(3)); // 6 (cached)
console.log(callCount2); // 2

// Example 3 - fib
let callCount3 = 0;
const fib = memoize(function (n) {
  callCount3 += 1;
  return n <= 1 ? 1 : fib(n - 1) + fib(n - 2);
});

console.log("--- Example 3 ---");
console.log(fib(5)); // 8
console.log(callCount3); // 6 (each unique n computed once)
