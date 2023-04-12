let num = 10;

console.log("starting execution...");

function printNum() {
  console.log(num);
}

setTimeout(printNum, 3000);

num = 42;

console.log("end of script...");
 
//first 'starting execution...' will be printed.
//setTimeout() function schedules the printNum() function to be executed after a delay of 
//33 seconds.
//the rest of the script continues to execute without waiting for the setTimeout() to complete
//output:  tarting execution...
        // end of script...
        // 42
