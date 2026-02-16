// Reverse bits of a given 32 bits signed integer.

var reverseBits = function (n) {
  let result = 0;

  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (n & 1);
    n = n >>> 1;
  }

  return result >>> 0;
};

// Test cases
console.log(reverseBits(43261596)); // Expected: 964176192
console.log(reverseBits(4294967293)); // Expected: 3221225471
console.log(reverseBits(0)); // Expected: 0
console.log(reverseBits(1)); // Expected: 2147483648
