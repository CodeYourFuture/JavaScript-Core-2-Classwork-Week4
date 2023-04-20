function printGreeting() {
  console.log(`Hello there, ${firstName}`);
}

const firstName = "Moussab";

printGreeting();

// The function is a global scope and it has access to the global variable "firstName".
// 1- The code defines a function called "printGreeting" that logs "hello there, Mousssab" to the console.
// 2- The variable "firstName" has a value of "Moussab" but it is not defined in the function and it will throw an error.
// 3- The function "printGreeting" is a global scope and logs the message "hello there, Moussab" by using the value of the variable "firstName" of "Moussab" and is defied in the global scope.   
