import React, { Component } from "react";

export default class Search extends Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            id="email_inline"
            type="search"
            placeholder="search"
            className="validate"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn purple lighten-3 search-btn"
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
          >
            Search
          </button>
        </div>

        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="all"
            checked={this.state.type === "all"}
            onChange={this.handleFilter}
          />
          <span>All</span>
        </label>

        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            checked={this.state.type === "movie"}
            onChange={this.handleFilter}
          />
          <span>Movies</span>
        </label>

        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            checked={this.state.type === "series"}
            onChange={this.handleFilter}
          />
          <span>Series</span>
        </label>
      </div>
    );
  }
}
