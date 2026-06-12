import React from "react";
import { useMovieContext } from "../context/GlobalContext";
import * as actions from "../context/ActionTypes";
import "./MovieControl.css";

function MovieControl({ movie, type }) {
  const MovieContext = useMovieContext();

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
            title="Move to Watched"
          >
            👁️
          </button>

          <button
            className="ctrl-btn delete-btn"
            onClick={() =>
              MovieContext.MoviesDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
                payload: movie.imdbID,
              })
            }
            title="Remove"
          >
            ❌
          </button>
        </>
      )}

      {type === "watched" && (
        <button
          className="ctrl-btn delete-btn"
          onClick={() =>
            MovieContext.MoviesDispatch({
              type: actions.REMOVE_MOVIE_FROM_WATCHED,
              payload: movie.imdbID,
            })
          }
          title="Delete"
        >
          🗑️
        </button>
      )}
    </div>
  );
}

export default MovieControl;