function printGreeting() {
  console.log(`Hello there, ${firstName}`);
}

const firstName = "Moussab";

printGreeting();
//The firstName still is global variable and has declared before calling the function.
//output: Hello there, Moussab