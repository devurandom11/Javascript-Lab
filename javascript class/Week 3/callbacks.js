function calculateSum(n, callback) {
  var i;
  var sum = 0;
  for (i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(`Sum is: ${sum}`);
  callback(sum);
}

var n = 10;
calculateSum(n, function (sum) {
  console.log(`Average is: ${sum / n}`);
});

// Callback Function Example
function greet(name, myFunction) {
  console.log("Hello friend");

  // callback function
  // executed only after the greet() is executed
  myFunction(name);
}

// callback function
function sayName(name) {
  console.log("Hello" + " " + name);
}

// calling the function after 2 seconds
setTimeout(greet, 1000, "Mike", sayName);
