import React, { useEffect, useState } from "react";
import axios from "axios";
import ResultCard from "./ResultCard";
import "./Add.css";

function Add() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!searchValue.trim()) {
      setMovies([]);
      return;
    }

    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?s=${searchValue}&apikey=a7ba24b9`
        );

        console.log("API RESPONSE:", response.data);

        if (response.data.Search) {
          setMovies(response.data.Search);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.log("API ERROR:", error);
        setMovies([]);
      }
    };

    // تأخير بسيط (Debounce) لتخفيف الضغط على API
    const timer = setTimeout(() => {
      fetchMovies();
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <div className="page">
      <div className="container">
        <div className="add-container">
          
          <div className="input-container">
            <input
              type="text"
              placeholder="Search for a movie..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>

          {movies.length > 0 ? (
            <ul className="results">
              {movies.map((movie) => (
                <li key={movie.imdbID}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          ) : (
            searchValue && (
              <p style={{ color: "white", marginTop: "20px" }}>
                No movies found
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Add;