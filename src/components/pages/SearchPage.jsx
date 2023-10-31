import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieList from '../MovieList';

export default function SearchPage({ movies, user }) {
  const [searchedText, setSearchedText] = useState(''); // инпут с поиском
  const [searchedMovies, setSearchedMovies] = useState(movies); // массив фильмов

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      axios
        .get(`/api/movies/search?searchString=${searchedText}`)
        .then((res) => {
          setSearchedMovies(res.data);
        });
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [searchedText]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <h1>Search Page</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            value={searchedText}
            onChange={(e) => setSearchedText(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <MovieList
            user={user}
            movies={searchedMovies}
            setMovies={setSearchedMovies}
          />
        </div>
      </div>
    </div>
  );
}
