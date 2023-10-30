import React from 'react';

export default function MovieForm({ setMovies }) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/movies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(event.target))),
    });

    const data = await response.json();
    setMovies((prev) => [...prev, data]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="title" />
      <input type="text" name="year" placeholder="year" />
      <input type="text" name="type" placeholder="type" />
      <input type="text" name="img" placeholder="img" />
      <button type="submit">Send</button>
    </form>
  );
}
