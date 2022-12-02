import React, { Component } from 'react';

export class Search extends Component {
  state = {
    search: '',
    type: '',
  };

  selectType = {
    all: '',
    movie: 'movie',
    series: 'series',
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  }

  selectTypeChange = (event) => {
    this.setState(
      () => ({ type: event.target.value }),
      () => { this.props.searchMovies(this.state.search, this.state.type); });
  }

  render() {
    return (
      <div className="row">
        <div className="input-field " >
          <input
            className="validate"
            placeholder="search"
            type="search"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKeyDown}
          />
          <button
            className="btn search-btn"
            onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>Search</button>
        </div>
        <div>
          <label className="col s4">
            <input name="group1" type="radio" value="all" onChange={this.selectTypeChange} />
            <span>All</span>
          </label>
          <label className="col s4">
            <input name="group1" type="radio" value="movie" onChange={this.selectTypeChange} />
            <span>Movies</span>
          </label>
          <label className="col s4">
            <input name="group1" type="radio" value="series" onChange={this.selectTypeChange} />
            <span>Series</span>
          </label>
        </div>
      </div >
    );
  }
}
