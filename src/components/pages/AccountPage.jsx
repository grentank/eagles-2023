import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../MovieList';

export default function AccountPage({ user }) {
  const [moviesState, setMoviesState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    axios
      .get('/api/movies/owned', { signal })
      .then((res) => {
        console.log('GOT RESPONSE');
        setLoading(false);
        setMoviesState(res.data);
      })
      .catch(console.log);

    return () => controller.abort();
  }, []); // Пример useEffect на монтирование

  return (
    <div className="container">
      {loading ? (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <MovieList
          user={user}
          movies={moviesState}
          setMovies={setMoviesState}
        />
      )}
    </div>
  );
}
