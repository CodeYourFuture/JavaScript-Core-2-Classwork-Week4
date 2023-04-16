function printGreeting() {
  console.log(`Hello there, ${firstName}`);
}

const firstName = "Moussab";

printGreeting();

//i think printGreeting function print `Hello there, Moussab`
// because firstName variable is a global one so the function's scope can take it, even it declared after the function