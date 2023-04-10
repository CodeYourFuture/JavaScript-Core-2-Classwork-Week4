let x = 10;

function printCoordinates(point) {
  let y = 3;

  console.log(`The x coordinate is ${x}`);
  console.log(`The y coordinate is ${y}`);
}

console.log(printCoordinates());
// x will be 10 and y will be 3. (The x coordinate is 10 , The y coordinate is 3)
console.log(y);
// it will face error because y is declared inside the function and we do not have access to y outside the function.
