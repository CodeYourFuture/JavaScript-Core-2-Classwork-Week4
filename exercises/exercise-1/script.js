let num = 10;

console.log("starting execution...");

function printNum() {
  console.log(num);
}

setTimeout(printNum, 3000);

num = 42;

console.log("end of script...");

/*it going to print  'starting execution... 'and then 'end of script...' and then print 42 since the num is updated  and the printNum gets updated too because , and it's going to get printed after 3 seconds    */ 