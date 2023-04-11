function printGreeting() {
  console.log(`Hello there, ${firstName}`);
}

const firstName = "Moussab";

printGreeting();

//should print ok as firstName is a global variable
//it's declared before the function is called