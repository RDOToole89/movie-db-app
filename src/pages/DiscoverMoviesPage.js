import React, { useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard/MovieCard";
import "./DiscoverMoviesPage.css";

function DiscoverMoviesPage() {
  const [searchText, setSearchText] = useState("");
  const [searchStatus, setSearchStatus] = useState({ status: "idle" });
  const [movies, setMovies] = useState();

  const search = async () => {
    console.log("Start searching for:", searchText);
    const queryParam = encodeURIComponent(searchText);

    setSearchStatus({ status: "searching" });

    const response = await axios.get(`https://omdbapi.com/?apikey=f318dce9&s=${queryParam}`);

    setSearchStatus(!response ? { status: "searching" } : { status: "done searching" });
    console.log(searchStatus);
    console.log("Searched Movies Array:", response.data.Search);
    setMovies(response.data.Search);
    setSearchText("");
  };

  const onChangeSearchHandler = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <div>
        <input value={searchText} onChange={onChangeSearchHandler} />
        <button onClick={search}>Search</button>
      </div>
      <div className="movie-list">
        {movies ? (
          movies.map((movie) => {
            return (
              <MovieCard
                key={movie.imdbID}
                imdbId={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
              />
            );
          })
        ) : (
          <p>...loading</p>
        )}
      </div>
    </div>
  );
}

export default DiscoverMoviesPage;
