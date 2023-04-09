/*

Using setTimeout and setInterval
----------

- Open index.html using Live Server
- Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
- Update your code to make the colour change every 5 seconds to something different.
  Hint: try searching for setInterval.

*/
const div = document.getElementById("main")

function changeColor(){
  div.style.backgroundColor = Math.floor(Math.random() * 16777215).toString(16);
}
setInterval(changeColor, 5000);