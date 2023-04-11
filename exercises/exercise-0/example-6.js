let x = 1;

function printCoordinates(point) {
  let x = 2;

  console.log(`The x coordinate is ${x}`);
  console.log(`The y coordinate is ${y}`);
}

printCoordinates({ x: 10, y: 3 });

//x will be set to 2 because of scope and proximity to use
//y will be set to the value from the parameter 3
//correction y was undefined so caused a problem crash
//to reference y - we would have needed to access via point.y