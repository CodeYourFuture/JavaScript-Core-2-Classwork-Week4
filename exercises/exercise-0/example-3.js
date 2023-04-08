function printGreeting() {
  const firstName = "Moussab";
}

console.log(`Hello there, ${firstName}`);

printGreeting();

//i believe we would get an error like 'undefined firstname' or something like that
//because firstname variable is a function scoped means it's only able to be run in the function it's declared
//however const keyword defines a global variable, so it should work

//i was wrong, i got the error so const doesnt declare a global variab