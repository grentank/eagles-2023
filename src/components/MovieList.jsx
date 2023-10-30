import React from 'react';
import MovieCard from './MovieCard';

export default function MovieList({ movies, setMovies }) {
  const deleteHandler = async (event) => {
    console.log(event.target.id);
    const response = await fetch(`/api/movies/${event.target.id}`, {
      method: 'DELETE',
    });
    if (response.status === 200) {
      setMovies((prev) => prev.filter((el) => el.id !== Number(event.target.id)));
    }
  };
  return (
    <>
      <div>MovieList</div>
      <div className="row">
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} deleteHandler={deleteHandler} />)}
      </div>
    </>
  );
}
