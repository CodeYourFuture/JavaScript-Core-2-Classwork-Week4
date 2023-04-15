function printGreeting() {
  console.log(`Hello there, ${firstName}`);
}

const firstName = "Moussab";

printGreeting();

//It will also print the value of the firstName variable
//because it was declared in the global scope and before the function was called.
