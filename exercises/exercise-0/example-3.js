function printGreeting() {
  const firstName = "Moussab";
}

console.log(`Hello there, ${firstName}`);

printGreeting();

//name will be output as undefined as it's not set globally
//firstName is only available within the scope of the function printGreeting
//correction the code threw an error for the undefined variable