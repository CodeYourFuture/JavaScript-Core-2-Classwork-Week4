/*

Using setTimeout and setInterval
----------

- Open index.html using Live Server
- Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
- Update your code to make the colour change every 5 seconds to something different.
  Hint: try searching for setInterval.

*/
let background = document.querySelector("body")

// setTimeout(changeColour, 5000);

// function changeColour(){
// background.style.backgroundColor = "red"
// }

setInterval(changeColour, 5000);

function changeColour(){
background.style.backgroundColor =  Math.floor(Math.random()*16777215).toString(16);
}