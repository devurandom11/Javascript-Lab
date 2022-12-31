// "use strict";

function factorial(num) {
  // Base Case
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

console.dir(factorial(19));

// Use var to hoist i for final console.log
function outputNumbers(count) {
  for (var i = 0; i < count; i++) {
    console.log("Current i = " + i);
  }
  console.log("Final i = " + i);
}

outputNumbers(10);

(() => {
  for (var n = 0; n < 10; n++) {
    console.log("Current n = ", n);
  }
  console.log("Final n = ", n);
  console.log("Who invoked this!");
})();
