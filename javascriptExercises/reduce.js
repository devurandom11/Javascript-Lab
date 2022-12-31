const numbers = [5, 10, 15, 20, 25, 30];

const doubledEvensSums = numbers
  .filter((num) => {
    if (num % 2 === 0) return true;
    return false;
  })
  .map((num) => num * 2)
  .reduce((result, num) => result + num, 0);

console.log(numbers);
console.log(doubledEvensSums);
