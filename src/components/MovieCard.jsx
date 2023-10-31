import React, { useEffect } from 'react';

export default function MovieCard({ movie, deleteHandler, user }) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(movie.title);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="card col-3">
      <img
        src={movie.img}
        className="card-img-top"
        alt={movie.title}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">
          {movie.year} - {movie.type}
        </p>
        <p>
          <i>- {movie.User.name}</i>
        </p>
        <a href={`/movies/${movie.id}`} className="btn btn-primary">
          Details
        </a>
        {user.id === movie.userId && (
          <button
            id={movie.id}
            onClick={deleteHandler}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
