/*

Using setTimeout and setInterval
----------

- Open index.html using Live Server
- Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
- Update your code to make the colour change every 5 seconds to something different.
  Hint: try searching for setInterval.

*/


let colour = red;
console.log("change background color");

function changeColor() {
  console.log(colour);
}


setTimeout(changeBackgroundColor, 5000);

colour = green;

// setTimeout(function, milliseconds ) Executes a function, after waiting a specified number of milliseconds.
// setInterval(function, milliseconds ) Same as setTimeout(), but repeats the execution of the function continuously.