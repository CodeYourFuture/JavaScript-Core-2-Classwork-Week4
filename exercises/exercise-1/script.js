let num = 10;

console.log("starting execution...");

function printNum() { // save me to call later
  console.log(num);
}

setTimeout(printNum, 3000); // when we call it

num = 42;

console.log("end of script...");
