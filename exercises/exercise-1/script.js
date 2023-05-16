let num = 10;

console.log("starting execution...");

function printNum() {
  console.log(num);
}

setTimeout(printNum, 6000);

num = 42;

console.log("end of script...");



/* starting execution ,,,
10
fail 
end of script


*/