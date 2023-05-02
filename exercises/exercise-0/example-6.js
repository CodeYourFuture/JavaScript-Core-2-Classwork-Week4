let x = 1;

function printCoordinates(point) {

  console.log(`The x coordinate is ${point.x}`);
  console.log(`The y coordinate is ${point.y}`);
  console.log(`The point is ${point}`);

}

printCoordinates({ x: 10, y: 3 });
// We will get error, as variable y is not defined.