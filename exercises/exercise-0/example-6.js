let x = 1;

function printCoordinates(point) {
  let x = 2;

  console.log(`The x coordinate is ${x}`);
  console.log(`The y coordinate is ${y}`);
}

printCoordinates({ x: 10, y: 3 });

// output is :
// The x coordinate is 2
// y is not defined

// variable x is resign inside function as local var
// y is defined 