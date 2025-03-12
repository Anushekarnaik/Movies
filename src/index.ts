import { MovieManager } from "./movies_management";

const movieManager = new MovieManager();

// Adding movies
movieManager.addMovie("1", "Inception", "Christopher Nolan", 2010, "Sci-Fi");
movieManager.addMovie("2", "Interstellar", "Christopher Nolan", 2014, "Sci-Fi");
movieManager.addMovie("3", "The Dark Knight", "Christopher Nolan", 2008, "Action");

// Rating movies
movieManager.rateMovie("1", 5);
movieManager.rateMovie("2", 4);
movieManager.rateMovie("3", 5);
movieManager.rateMovie("1", 4);

// Fetching details
console.log("Average rating of Inception:", movieManager.getAverageRating("1"));
console.log("Top rated movies:", movieManager.getTopRatedMovies());
console.log("Movies by genre 'Sci-Fi':", movieManager.getMoviesByGenre("Sci-Fi"));
console.log("Movies by Christopher Nolan:", movieManager.getMoviesByDirector("Christopher Nolan"));
console.log("Search movies with 'Dark':", movieManager.searchMoviesBasedOnKeyword("Dark"));

// Fetching a specific movie
console.log("Details of movie with ID 1:", movieManager.getMovie("1"));

// Removing a movie
movieManager.removeMovie("2");
console.log("Movies after removing ID 2:", movieManager.getTopRatedMovies());
