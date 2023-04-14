let num = 10;

console.log("starting execution..."); //first

function printNum() {
  console.log(num);
}

setTimeout(printNum, 3000); //runs on the end of code because of the setTimeout

num = 42;

console.log("end of script..."); //second
