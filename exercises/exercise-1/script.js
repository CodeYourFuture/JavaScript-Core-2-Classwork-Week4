let num = 10;

console.log("starting execution...");

function printNum() {
  console.log(num);
}

setTimeout(printNum, 3000);

num = 42;

console.log("end of script...");

/*
  prediction:
  "starting execution..."
  "end of script..."
  42
*/

/*
  Explain:
  firstly the firth line will be executed => num = 10
  then the third line => print "starting execution..."
  then line 9 => we should wait for 3 s to execute printNum function and as js is a async programming language don't wait for getting answer
  then line 11 => num value will change from 10 to 42
  then line 13 => print "end of script..."
  and since  3 s have passed go to line 5 and print num (42)  
*/
