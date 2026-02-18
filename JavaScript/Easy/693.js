// 693. Binary Number with Alternating Bits
// Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  let result = n ^ (n >> 1);

  return (result & (result + 1)) === 0;
};

console.log(hasAlternatingBits(5)); // Expected: true
console.log(hasAlternatingBits(7)); // Expected: false
console.log(hasAlternatingBits(11)); // Expected: false
