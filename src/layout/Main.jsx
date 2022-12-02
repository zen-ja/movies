import React from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

// don't change the Component name "App"
export class Main extends React.Component {
  state = {
    movies: [],
  };

  searchMovies = (str, type) => {
    fetch(`http://www.omdbapi.com/?apikey=ce38fcfc&s=${str}${type !== 'all' ? '&type=' + type : ''}`)
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }));
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=ce38fcfc&s=hello')
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search }));
  }

  render() {
    return <main className="container content">
      <div><Search searchMovies={this.searchMovies} /></div>
      {this.state.movies
        ? <Movies movies={this.state.movies} />
        : <Preloader />}
    </main>;
  }
}


// import { Component } from "react";
// import { Movies } from "../components/Characters";

// export class Main extends Component {
//   state = {
//     movies: [],
//     count: 0,
//     perPage: 0,
//   };

//   componentDidMount() {
//     fetch('https://rickandmortyapi.com/api/character?page=30')
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({ movies: data.results, count: data.info.count, perPage: data.results.length });
//       })
//       .then(() => console.log(this.state.count, this.state.perPage));
//   }

//   render() {
//     return (
//       <main className="container content">
//         {this.state.movies ? <Movies movies={this.state.movies} /> : <h2>loading...</h2>}
//       </main>
//     );
// }
// }