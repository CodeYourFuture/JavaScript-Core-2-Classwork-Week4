function printGreeting() {
  const firstName = "Moussab";
}

console.log(`Hello there, ${firstName}`);

printGreeting();

// This is a block scope. The function declares and initializes the const variable "firstName" with the value of "Moussab" that is inside of the block scope and it can only be accessed within the block scope not outside the scope so it will throw a referenceError . 

// 1- The code defines a function named "printGreeting()" which is a local scope and prints the "hello there, Moussab" using the block scope variable "firstName". 