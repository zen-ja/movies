import React from 'react';

export function Movie(props) {
  const { imdbID: id, Title: name, Poster: poster, Year: year, Type: type } = props;
  return (
    <div id={id} className="movie card">
      <div className="col s12 m7">
        <div>
          <div className="card-image">
            <img src={poster} alt="!#" />
          </div>
          <div className="card-content">
            <span className="card-title">{name}</span>
            <p>{year} <span className="right">{type}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}