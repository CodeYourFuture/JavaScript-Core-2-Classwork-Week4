let x = 10;

function printCoordinates(point) {
  let y = 3;

  console.log(`The x coordinate is ${x}`);
  console.log(`The y coordinate is ${y}`);
}

console.log(printCoordinates());
console.log(y);
 

// 1- x with the value of 10 is a global scope variable which can be accessed throughout the entire program.
// 2- Whereas the y variable is a block(local) scope that can only be accessed within the block{}.
// 3- console.log(y) will throw a refrenceError beause the y variable is not efined in the global scope. 