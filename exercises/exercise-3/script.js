/*

Exercise 3
----------

- Complete tasks 1-3. Task 4 is an optional extra.
- Open index.html using Live Server

You are given the following list of movies.

*/

const movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];

/*

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and for each movie, it creates a <p> element with the movie title and director and append it to the #allMovies div.
- it sets the innerText of the #moviesNumber element to the total number of the movies in the array "movies"

*/

// First is the function that call the whole array - global function. Inside the brackets - local - two const variable use the document.getElementById for allMovies AND moviesNumber.  
// The innerHTML property sets or returns the HTML content (inner HTML) of the both elements. The variable moviesCount = 0 defines the iteration start from the first listed movie.
// The local function for start the iteration from first to last and create a p element for each movie and set the innerText to the movieTitle AND director.
// In this array of array it appends to the allMoviesDiv. Then the moviesCount add on a new count for each movie that been processed.
// Then the innerText function of the #moviesNumber span to moviesCount and display the total number of movies in the array.

function showMovies() {
  const allMoviesDiv = document.getElementById("allMovies");
  const moviesNumberSpan = document.getElementById("moviesNumber");
  
  allMoviesDiv.innerHTML = "";
  let moviesCount = 0;
  
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    
    const movieInfo = document.createElement("p");
    movieInfo.innerText = `${movie.title} - ${movie.director}`;
    
    allMoviesDiv.appendChild(movieInfo);
    
    moviesCount++;
  }
  
  moviesNumberSpan.innerText = moviesCount;
}



/*

Task 2
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovie to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

*/

// Here we have a movie object in the myFavMovie array AND a callback function that will be called after new movies are added to the array.
// setTimeout calls a delay of 2000 milliseconds and in its array it use the .push method to push new movies. 
// The addMovie function adds Godfather to the list showMovies and we change from 4 to 5 movies.

const myFavMovie = {
  title: "Godfather",
  director: "Francis Ford Coppola",
  type: "action",
  haveWatched: true,
};

function addMovie(movie, callback) {
  // add code here
  {
  
 setTimeout(() => {
    
    movies.push(movie);
    
    // call the callback function to update the UI
    callback();
  }, 2000);
}


addMovie(myFavMovie, showMovies);

  
  
/*

Task 3
Can you change the addMovie function to make sure the new movie you just added is showing on the screen?
Hint: use callbacks

// It start with a function that call two arguments - movie, callback - and in the outer array setTimeOut simulate a 2000 millisecond delay.
// In the inner array i use the .push method to add movies to the array. Then the callback function calls the new movie as argument and updates the array.


function addMovie(movie, callback) {
  
  setTimeout(() => {
    movies.push(movie);
    
    callback(movie);
  }, 2000);
}

 
Task 4 - **Extra**
- On the form with id #addMovies, add a "submit" event listener
- When the button is clicked you need to:
    - Read all input field values and create a new movie object literal with title, director, type and haveWatched properties
    - Push the new object on the movies array
    - Display the updated list of movies on your page

Hint: Use the functions you created on tasks 1-3

*/
