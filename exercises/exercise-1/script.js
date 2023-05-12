let num = 10;

console.log("starting execution...");

function printNum() {
  console.log(num);
}

setTimeout(printNum, 3000);

num = 42;

console.log("end of script...");

// my predection
// print this -> starting execution...
// then error // no its a built in method hmmm take time as milliseconds and the parameter
// then print number 10 after 3 seconds
// then print end of script s

// it prints them all but in different order because of the timer thing
