import React, { useState } from "react";

const Search = (props) => {
  const { searchMovies = Function.prototype } = props;

  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      searchMovies(search, type);
    }
  };

  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="input-field">
        <input
          id="email_inline"
          type="search"
          placeholder="search"
          className="validate"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className="btn purple lighten-3 search-btn"
          onClick={() => searchMovies(search, type)}>
          Search
        </button>
      </div>

      <label>
        <input
          className="with-gap"
          name="type"
          type="radio"
          data-type="all"
          checked={type === "all"}
          onChange={handleFilter}
        />
        <span>All</span>
      </label>

      <label>
        <input
          className="with-gap"
          name="type"
          type="radio"
          data-type="movie"
          checked={type === "movie"}
          onChange={handleFilter}
        />
        <span>Movies</span>
      </label>

      <label>
        <input
          className="with-gap"
          name="type"
          type="radio"
          data-type="series"
          checked={type === "series"}
          onChange={handleFilter}
        />
        <span>Series</span>
      </label>
    </div>
  );
};

export default Search;
