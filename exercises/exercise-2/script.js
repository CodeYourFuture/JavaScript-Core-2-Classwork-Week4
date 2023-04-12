/*

Using setTimeout and setInterval
----------

- Open index.html using Live Server
- Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
- Update your code to make the colour change every 5 seconds to something different.
  Hint: try searching for setInterval.

*/
let colors = ["red", "green", "blue", "pink","yellow"];

function changeBackgroundColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  document.body.style.backgroundColor = randomColor;
}

setTimeout(changeBackgroundColor, 5000);
setInterval(changeBackgroundColor, 5000);
