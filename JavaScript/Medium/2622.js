// 2622. Cache With Time Limit

// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.

var TimeLimitedCache = function () {
  this.cache = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  let exists = false;
  if (this.cache[key] && this.cache[key].expiration > Date.now()) {
    exists = true;
  }
  this.cache[key] = {
    value: value,
    expiration: Date.now() + duration,
  };
  return exists;
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  if (this.cache[key] && this.cache[key].expiration > Date.now()) {
    return this.cache[key].value;
  }
  return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  let count = 0;
  for (let key in this.cache) {
    if (this.cache[key].expiration > Date.now()) {
      count++;
    }
  }
  return count;
};

const timeLimitedCache = new TimeLimitedCache();
timeLimitedCache.set(1, 42, 1000); // false
timeLimitedCache.get(1); // 42
timeLimitedCache.count(); // 1

console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1
console.log(timeLimitedCache.get()); // -1

console.log(timeLimitedCache.set(1, 50, 1000)); // false
console.log(timeLimitedCache.get(1)); // 50
console.log(timeLimitedCache.get(1)); // 50
console.log(timeLimitedCache.count()); // 1
console.log(timeLimitedCache.get()); // -1
