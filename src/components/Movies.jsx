import React from "react";
import { Movie } from "./Movie";

function Movies(props) {
  const { films = [] } = props;
  return (
    <div className="movies">
      {films.length ? (
        films.map((item) => <Movie key={item.imdbID} {...item} />)
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
}

export default Movies;
