import React from "react";
import { Movies } from "../Movies";
import Search from "../Search";
import Preloader from "./../Preloader";

const API_KEY = process.env.REACT_APP_API_KEY;

export default class Main extends React.Component {
  state = {
    // error: null,
    isLoaded: true,
    films: [],
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          isLoaded: false,
          films: data.Search,
        });
      });
  }

  searchMovies = (str, type = "all") => {
    this.setState({ isLoaded: true });
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          isLoaded: false,
          films: data.Search,
        });
      });
  };

  render() {
    const { films, isLoaded } = this.state;

    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />

        {isLoaded ? <Preloader /> : <Movies films={films} />}
      </main>
    );
  }
}
