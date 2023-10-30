import React, { useState } from 'react';
import MovieForm from '../MovieForm';
import MovieList from '../MovieList';

export default function MoviesPage({ movies }) {
  const [moviesState, setMoviesState] = useState(movies);
  return (
    <>
      <div>MoviesPage</div>
      <MovieForm setMovies={setMoviesState} />
      <MovieList movies={moviesState} setMovies={setMoviesState} />
    </>
  );
}
