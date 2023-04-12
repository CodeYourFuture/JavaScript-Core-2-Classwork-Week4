let num = 10;

console.log("starting execution...");

function printNum() {
  console.log(num);
}

setTimeout(printNum, 3000);

num = 42;

console.log("end of script...");

// starting execution....
// end of script...
// 42
// because execution of the function is postponed for 3s, so all other code would be executed by that time and num would be equal 42 already
