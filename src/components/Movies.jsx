import React from 'react';
import { Movie } from './Movie';

export function Movies(props) {
  return (
    <div className="movies">
      {props.movies.map((movie) => { return <Movie key={movie.imdbID} {...movie} /> })}
    </div>
  );
}
