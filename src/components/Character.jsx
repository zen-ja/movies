import React from 'react';

function Character(props) {
  //return <div className="movie card"></div>;

  const { id, name, describe, poster } = props;
  return (
    <div className="row">
      <div className="movie card">
        <div className="col s12 m7">
          <div className="card" key={id}>
            <div className="card-image">
              <img src={poster} alt="" />
              <span className="card-title">{name}</span>
            </div>
            <div className="card-content">
              <p>{describe}</p>
            </div>
            <div className="card-action">
              <a href="!#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export { Movie };