let num = 10;

console.log("starting execution...");

function printNum() {
  console.log(num);
}

setTimeout(printNum, 3000);

num = 42;

console.log("end of script...");

//output is 
// starting execution...
// end of script...
// 42

// first is call all console log as synchronous.
// then go back to to call function as asynchronous with setTimeout 3000.
// this the reason to 42 call was second and in output is last result.