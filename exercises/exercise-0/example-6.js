let x = 1;

function printCoordinates(point) {
  let x = 2;

  console.log(`The x coordinate is ${x}`);
  console.log(`The y coordinate is ${y}`);
}

printCoordinates({ x: 10, y: 3 });

/*the y is not defined within the function and it's not passed as an argument either os it;s going to give us an error  */