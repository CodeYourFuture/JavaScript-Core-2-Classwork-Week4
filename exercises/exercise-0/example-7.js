let x = 10;

function printCoordinates(point) {
  let y = 3;

  console.log(`The x coordinate is ${x}`);
  console.log(`The y coordinate is ${y}`);
  console.log(y);
}

console.log(printCoordinates());
  /* the y is defined only within the function so when we try to 
access it with console log it's going to give us an error , it would only work if we did the console log inside the function , 
also the console.log(printCoordinates()); it's not going to print anything because we aren't returning anything  */