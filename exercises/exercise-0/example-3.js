function printGreeting() {
  const firstName = "Moussab";
}

console.log(`Hello there, ${firstName}`);

printGreeting();

//In this case it will undefined, because firstName was declared
//within the function scope, so it cannot be accessed outside it.
