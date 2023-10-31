import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MoviesPage from './pages/MoviesPage';
import Navbar from './Navbar';
import MoviePage from './pages/MoviePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AccountPage from './pages/AccountPage';
import SearchPage from './pages/SearchPage';

export default function App({ movies, movie, user }) {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="container">
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/movies"
          element={<MoviesPage user={user} movies={movies} />}
        />
        <Route
          path="/movies/:movieId"
          element={<MoviePage movie={movie} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/account"
          element={
            <>
              <button
                type="button"
                onClick={() => setIsShown(!isShown)}
              >
                Show
              </button>
              {isShown && <AccountPage user={user} />}
            </>
          }
        />
        <Route path='/search' element={<SearchPage movies={movies} user={user} />} />
      </Routes>
    </div>
  );
}
