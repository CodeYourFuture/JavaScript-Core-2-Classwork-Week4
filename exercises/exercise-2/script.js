/*

Using setTimeout and setInterval
----------

- Open index.html using Live Server
- Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
- Update your code to make the colour change every 5 seconds to something different.
  Hint: try searching for setInterval.

*/

// function changeBackground () {
//   let element = document.getElementById("main");
//   element.style.backgroundColor = "blue";
// }

// setTimeout(changeBackground, 5000);

let colours = ["blue", "purple", "orange", "yellow", "green"];

function changeBackground () {
    let element = document.getElementById("main");
    count = 0;
    while (count < 5){
      element.style.backgroundColor = colours[count];
      count++;
    }
    
  }

setInterval(changeBackground, 5000);

