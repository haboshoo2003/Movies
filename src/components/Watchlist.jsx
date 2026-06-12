import React from "react";
import { useMovieContext } from "../context/GlobalContext";
import "./Watchlist.css";
import MovieCard from "./MovieCard";

const Watchlist = () => {
  const MovieContext = useMovieContext();

  return (
    <div className="watchlist">
      <div className="container">
        <div className="mainhedding">
          <h1>My watchlist</h1>
          <span className="movies-count">
            {MovieContext.watchlist.length}{" "}
            {MovieContext.watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {MovieContext.watchlist.length > 0 ? (
          <div className="movie-grid">
            {MovieContext.watchlist.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list</h2>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
