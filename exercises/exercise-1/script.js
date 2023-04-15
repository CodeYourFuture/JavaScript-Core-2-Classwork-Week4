let num = 10;

console.log("starting execution...");

function printNum() {
  console.log(num);
}

setTimeout(printNum, 3000);

num = 42;

console.log("end of script...");

// num 10 is global
// starting execution is global
// timeout is 3 seconds
// num 42 is gobal
