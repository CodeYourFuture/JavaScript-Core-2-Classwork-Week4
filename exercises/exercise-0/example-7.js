let x = 10;

function printCoordinates(point) {
  let y = 3;

  console.log(`The x coordinate is ${x}`);
  console.log(`The y coordinate is ${y}`);
}

console.log(printCoordinates()); // should be only printCoordinates() instead
console.log(y);

//i think we get an error about is caused existing two console.log for first console.log
// variable 'y' is not gonna be printed because its a function scoped, it can be printed only in the function where it's declared

//i was wrong about first statament: printCoordinates is run before reach console.log() as an input
//but got an undefined for console.log but error