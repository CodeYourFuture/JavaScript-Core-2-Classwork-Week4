const firstName = "Moussab";

function printGreeting() {
  console.log(`Hello there, ${firstName}`);
}

printGreeting();

//The function will print "Hello there, Moussab", since the variable firstName
//has been declared on the global scope, so it can be accessed to anywhere in the code
