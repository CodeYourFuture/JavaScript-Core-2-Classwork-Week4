let num = 10;

console.log("starting execution...");

function printNum() {
  console.log(num);
}

setTimeout(printNum, 3000);

num = 42;

console.log("end of script...");

// We start with a global let num variable = 10. Then we console.log with a string. We have a function called printNum defined. 
// Inside the brackets we console.log the num. We have a delay/timer function that delay for 3000 milliseconds with the printNum being 10. 
// We change the num to equal 42 and then console.log with next string. Outcome will be: starting execution... AND end of script... AND 42
