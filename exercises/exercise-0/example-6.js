let x = 1;

function printCoordinates(point) {
  let x = 2;

  console.log(`The x coordinate is ${x}`);
  console.log(`The y coordinate is ${y}`);
}

printCoordinates({ x: 10, y: 3 });

//I think this will only print out the x coordinate with a value of 2, since the variable x that
//is declared in the local scope takes priority than the one declared on the global scope
//For y will give an error since this variable hasn't been declared.
