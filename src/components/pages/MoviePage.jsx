import React from 'react';
import MovieEditForm from '../MovieEditForm';

export default function MoviePage({ movie }) {
  return (
    <>
      <div>MoviePage</div>
      <img src={movie.img} alt={movie.title} />
      <MovieEditForm movie={movie} />
    </>
  );
}
