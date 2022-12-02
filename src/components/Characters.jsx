import { Movie } from './Character';

export function Characters(props) {
  return (
    <div className="movies">
      {props.movies.map((movie) =>
        <Movie
          key={movie.id}
          id={movie.id}
          name={movie.name}
          describe={movie.status}
          poster={movie.image}
        />
        // <p>{movie.name}</p>
      )}

    </div>
  );
}

()