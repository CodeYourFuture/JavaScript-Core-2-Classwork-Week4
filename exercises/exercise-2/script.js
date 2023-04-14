/*
Using setTimeout and setInterval
----------
-Open index.html using Live Server
- Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
- Update your code to make the colour change every 5 seconds to something different.
  Hint: try searching for setInterval.
*/
setInterval(backColor, 200);
let background = document.querySelector("body");
function backColor() {
  background.style.backgroundColor = Math.floor(Math.random() * 16777215);
}
