// Check if Object Instance of Class

// Write a function that checks if a given value is an instance of a given class or
// superclass. For this problem, an object is considered an instance of a given class
// if that object has access to that class's methods.

// There are no constraints on the data types that can be passed to the function.
// For example, the value or the class could be undefined.

/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  if (obj === null || obj === undefined || typeof classFunction !== "function") {
    return false;
  }

  console.log(obj, classFunction);

  let current = Object.getPrototypeOf(Object(obj));

  while (current !== null) {
    if (current === classFunction.prototype) {
      return true;
    }
    current = Object.getPrototypeOf(current);
  }
  return false;
};

class Animal {}
class Dog extends Animal {}
checkIfInstanceOf(new Dog(), Animal); // true

checkIfInstanceOf(new Date(), Date); // true
// func = () => checkIfInstanceOf(5, Number);
// func();

Object.getPrototypeOf(5); // Number.prototype (wrong!)

Object.getPrototypeOf(new Number(5));
const result = Object(5) instanceof Number;

console.log(result);
