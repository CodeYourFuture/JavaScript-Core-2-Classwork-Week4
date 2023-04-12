let x = 10;

function printCoordinates(point) {
  let y = 3;

  console.log("1st", `The x coordinate is ${x}`);
  console.log("2d", `The y coordinate is ${y}`);
}

console.log("3rd", printCoordinates());
console.log(y);


//1st console.log "The x coordinate is 10" (using global variable)
//2nd console.log "The y coordinate is 3" (using local variable)
//3rd console.log Undefined 
//4th console.log Undefined as "y" is local calling outside
