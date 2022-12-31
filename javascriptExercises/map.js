// All about the .map() method for arrays in JavaScript

/* EXPLANATION:

Map runs a function on every item in the passed array. Map creates a new array and does not modify the original.
Map returns undefined by default (like all js functions). Explicit return is needed for assignment to variable.

*/

// const numbers = [5, 10, 15, 20, 25, 30];
// const timesTen = numbers.map((number) => {
//   return number * 10;
// });

// console.log(timesTen);
// console.log(numbers);

/* EXAMPLE 1:

1. Create an array called 'bools' of the following booleans:
    [true, true, false, true, false, false]

2. Map over 'bools and do the following:
    - if 'true', return a random number in it's place
    - if 'false', return 0

3. Print out both arrays

*/

// const bools = [true, true, false, true, false, false];

// console.log(bools);
// console.log(
//   bools.map((bool) => {
//     if (bool) return Math.floor(Math.random() * 100 + 1);
//     return 0;
//   })
// );

/* Example 2: 

1. Create an array called 'prices' with the following values:
 [1.23, 19.99, 85.2, 32.87, 8, 5.2]

2. Create a new array using map called "taxedPrices" that:
 - If the price is greater than 10, adds 20% tax to it.

3. Print out both arrays

*/
// const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];
// const taxedPrices = prices.map((price) => {
//   if (price > 10) return price * 1.2;
//   return price;
// });

// console.log(prices);
// console.log(taxedPrices);

/* Exercise 3: 
    
1. Create the following array called "row":
    - [10, 20, 30, 40, 50]

2. Create a new array called "matrix" that:
    - maps over "row and returns each item, but in an array.
    - We should have a 2-dimensional array as a result

3. Print out both arrays.
    - "matrix" should look like this: [[10], [20], [30], [40], [50]]
*/

const row = [10, 20, 30, 40, 50];
const matrix = row.map((num) => [num]);

console.log(row);
console.log(matrix);
