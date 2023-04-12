let x = 1;

function printCoordinates(point) {
  let x = 2;

  console.log(`The x coordinate is ${x}`);
  console.log(`The y coordinate is ${y}`);
}

printCoordinates({ x: 10, y: 3 });
//the global x is unused. so it doesn't effect the output.
// the statement let x = 2 means that the value of x will always be 2 regardless of the argument passed to the function.
//output=> The x coordinated is 2-----y is not defined.
