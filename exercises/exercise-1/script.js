let num = 10;

console.log("starting execution...");

function printNum() {
  console.log(num);
}

setTimeout(printNum, 3000);

num = 42;

console.log("end of script...");

//starting execution will print first
//printNum is set to execute after 3 seconds
//num is set to 42
//end of script is printed
//42 is printed