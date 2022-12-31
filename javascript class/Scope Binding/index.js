let monica = {
  name: "Monica Geller",
  total: 400,

  addToBalance: (fee) => {
    this.total = this.total + fee;
    return this.name + "'s remaining balance is " + this.total;
  },
};

console.log(monica.addToBalance(100)); // "Monica Geller's remaining balance is 500"

let rachel = {
  name: "Rachel Green",
  total: 1500,
};

const fee = 200;

// This function should add the constant `fee` above to the object
// rachel's total above, using monica's `addToBalance` function, and

let rachelAddToBalance = () => {
  // TODO: Implement this function with the constant variable `fee` above.
  // HINT: this should be similar to the examples of the section "Which this is this?".
  // If you find yourself having more than 1 line, you are probably doing it incorrectly.
  // return the string "Rachel Green's remaining balance is <fee>"
  rachel.total += fee;
  return `${rachel.name}'s remaining balance is ${rachel.total}`;
};

// DO NOT CHANGE ANYTHING AFTER THIS LINE.

// Resets the state of the objects so it doesn't change across the tests.
let reset = () => {
  monica.total = 400;
  rachel.total = 1500;
};

module.exports = {
  rachelAddToBalance: rachelAddToBalance,
  reset: reset,
};

// Call the function. Uncomment these lines to test.
// NOTE: COMMENT these lines out when submit. Otherwise, it will fail.
//console.log(rachelAddToBalance()); // "Rachel Green's remaining balance is 1700"
//console.log(rachelAddToBalance()); // "Rachel Green's remaining balance is 1900"
