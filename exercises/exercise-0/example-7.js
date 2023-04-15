let x = 10;

function printCoordinates(point) {
  let y = 3;

  console.log(`The x coordinate is ${x}`);
  console.log(`The y coordinate is ${y}`);
}

console.log(printCoordinates());
console.log(y);

// x will take the global 10
// y will take the let value of 3 in first console.log
// undefined y variable as it's only in scope of the function
