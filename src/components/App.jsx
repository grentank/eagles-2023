import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import MoviesPage from './pages/MoviesPage';
import Navbar from './Navbar';
import MoviePage from './pages/MoviePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AccountPage from './pages/AccountPage';

export default function App({ movies, movie, user }) {
  return (
    <div className="container">
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movies" element={<MoviesPage user={user} movies={movies} />} />
        <Route path="/movies/:movieId" element={<MoviePage movie={movie} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </div>
  );
}
