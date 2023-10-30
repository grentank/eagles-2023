import React, { useState } from 'react';
import MovieForm from '../MovieForm';
import MovieList from '../MovieList';

export default function MoviesPage({ movies, user }) {
  const [moviesState, setMoviesState] = useState(movies);
  return (
    <>
      <div>MoviesPage</div>
      {user && <MovieForm setMovies={setMoviesState} />}
      <MovieList user={user} movies={moviesState} setMovies={setMoviesState} />
    </>
  );
}
