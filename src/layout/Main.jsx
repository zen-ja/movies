import React from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;


export class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  getUrl = (str, type) => `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type === 'all' ? '' : `&type=${type}`}`;

  searchMovies = (str, type = "all") => {
    this.setState({ loading: true });
    fetch(this.getUrl(str, type))
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }

  componentDidMount() {
    fetch(this.getUrl('Hello', 'all'))
      .then(response => response.json())
      .then(data => this.setState({ movies: data.Search, loading: false }))
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }

  render() {
    return <main className="container content">
      <div><Search searchMovies={this.searchMovies} /></div>
      {this.state.loading
        ? <Preloader />
        : <Movies movies={this.state.movies} />
      }
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