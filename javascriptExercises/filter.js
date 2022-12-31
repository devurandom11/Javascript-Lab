/* All about the .filter() method for arrays in JavaScript

/* EXPLANATION:

Filter runs a function on every item in the passed array and returns a SMALLER array than the original. Like Map, Filter creates a new array and does not modify the original.

*/

const numbers = [5, 10, 15, 20, 25, 30];
const evensOnly = numbers.filter((number) => {
  if (number % 2 === 0) return true;
  return false;
});

console.log(numbers);
console.log(evensOnly);
