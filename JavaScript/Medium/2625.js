// 2625. Flatten Deeply Nested Array

// Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

// A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

// A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

// Please solve it without the built-in Array.flat method.

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

// ============================================
// SOLUTION 1: Recursive Approach (Recommended)
// ============================================
var flat = function (arr, n) {
  // Base case: if depth is 0, return array as-is
  if (n === 0) {
    return arr;
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    // Check if current element is an array
    if (Array.isArray(arr[i])) {
      // Recursively flatten with depth - 1
      const flattened = flat(arr[i], n - 1);
      // Add all elements from flattened array
      result.push(...flattened);
    } else {
      // If not an array, just add the element
      result.push(arr[i]);
    }
  }

  return result;
};

// ============================================
// TEST CASES
// ============================================

console.log("=== SOLUTION 1: Recursive ===");

// Example 1
let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let n = 0;
// console.log("Input:", JSON.stringify(arr), "Depth:", n);
console.log("Output:", flat(arr, n));

// Example 2
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
n = 1;
// console.log("Input:", JSON.stringify(arr), "Depth:", n);
console.log("Output:", flat(arr, n));
// Example 3
arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, [9, 10, 11], 12],
  [13, 14, 15],
];
n = 2;
// console.log("Input:", JSON.stringify(arr), "Depth:", n);
console.log("Output:", flat(arr, n));
