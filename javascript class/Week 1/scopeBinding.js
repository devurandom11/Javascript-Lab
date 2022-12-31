// scope-binding-js

// In the code, monica is an object that contains 2 properties and a function addToBalance. Find a way to use monica's addToBalance for object rachel without creating a new object. The function rachelAddToBalance should use object rachel and the constant variable fee that are already defined. When calling the following rachelAddToBalance(), it should return "Rachel Green remaining balance is 1700" instead of 'Monica Geller remaining balance is 500'

// NOTE If you failed the tests and you uncommented the last lines in the code, you should remove or comment out the last lines again.

let monica = {
  name: "Monica Geller",
  total: 400,

  addToBalance: function (fee) {
    this.total = this.total + fee;
    return this.name + " remaining balance is " + this.total;
  },
};

console.log(monica.addToBalance(100)); // 'Monica Geller remaining balance is 500'

let rachel = {
  name: "Rachel Green",
  total: 1500,
};

const fee = 200;

let rachelAddToBalance = function () {
  // TODO: Implement this function with the constant variable `fee` above.
  return monica.addToBalance.call(rachel, fee);
};

// DO NOT CHANGE ANYTHING AFTER THIS LINE.

// Resets the state of the objects so it doesn't change across the tests.
let reset = function () {
  monica.total = 400;
  rachel.total = 1500;
};

module.exports = {
  rachelAddToBalance: rachelAddToBalance,
  reset: reset,
};

// Call the function. Uncomment these lines to test.
// NOTE: Comment these lines out when submit. Otherwise, it will fail.
// console.log(rachelAddToBalance()); // "Rachel Green remaining balance is 1700"
// console.log(rachelAddToBalance()); // "Rachel Green remaining balance is 1900"
