let x = 1;

function printCoordinates(point) {
  let x = 2;

  console.log(`The x coordinate is ${x}`);
  console.log(`The y coordinate is ${y}`);
}

printCoordinates({ x: 10, y: 3 });

// y is not defined it can be defined in via point.
// correction causes crash
