import React, { useEffect, useState } from "react";
import Movies from "../Movies";
import Search from "../Search";
import Preloader from "./../Preloader";

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Main() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // state = {
  //   error: null,
  //   isLoaded: true,
  //   films: [],
  // };

  const searchMovies = (str, type = "all") => {
    setIsLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((data) => data.json())
      .then((data) => {
        setFilms(data.Search);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        setError(error);
      });
  };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((data) => data.json())
      .then((data) => {
        setFilms(data.Search);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        setError(error);
      });
  }, []);

  return (
    <main className="container content">
      <Search searchMovies={searchMovies} />
      {isLoading ? <Preloader /> : <Movies films={films} />}
    </main>
  );
}
