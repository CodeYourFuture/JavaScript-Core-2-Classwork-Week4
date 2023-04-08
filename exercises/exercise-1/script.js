let num = 10;

console.log("starting execution...");

function printNum() {
  console.log(num);
}

setTimeout(printNum, 3000);

let count = 100000
while(count != 0) {
  console.log(count)
  count--}
num = 42;

console.log("end of script...");

//expected output below:
//starting execution...
//10
//end of script...

//i was wrong because setTimeout runs after the code executed
//so output is
//starting execution...
//end of script...
//42