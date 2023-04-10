/*

Using setTimeout and setInterval
----------

- Open index.html using Live Server
- Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).
- Update your code to make the colour change every 5 seconds to something different.
  Hint: try searching for setInterval.

*/

// Using set time out for changing background color
//  const firstChange = setTimeout(() => {
//   document.body.style.backgroundColor = "blue"
// }, 5000)

setInterval(changeBackgroundColor, 5000);

function changeBackgroundColor() {
  let color = Math.floor(Math.random() * 16777216).toString(16);
  console.log(color);
  document.body.style.backgroundColor = color;
}
