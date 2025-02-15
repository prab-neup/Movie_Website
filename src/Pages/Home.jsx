import React, { useState } from "react";
import MovieCard from "../Components/MovieCard";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Terminator", release_date: "2012" },
    { id: 2, title: "Matrix", release_date: "2000" },
  ];
  function handleSearch() {}

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movies.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
