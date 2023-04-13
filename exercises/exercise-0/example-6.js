let x = 1;

function printCoordinates(point) {
  let x = 2;

  console.log(`The x coordinate is ${x}`);
  console.log(`The y coordinate is ${y}`);
}

printCoordinates({ x: 10, y: 3 });
/* out put:
The x coordinate is 2 
the y is not defined
The printCoordinates  use let x=2 because it is defined in function and the function didnt defined y anywhere 