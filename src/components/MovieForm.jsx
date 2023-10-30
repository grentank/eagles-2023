import React, { useState } from 'react';

export default function MovieForm({ setMovies }) {
  const [inputs, setInputs] = useState({
    title: '',
    year: '',
    type: '',
    img: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/movies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputs),
    });

    const data = await response.json();
    setMovies((prev) => [...prev, data]);
  };

  const onChangeHandler = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    console.log(event.target.name, event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="title"
        value={inputs.title}
        onChange={onChangeHandler}
      />
      <input
        type="number"
        name="year"
        placeholder="year"
        value={inputs.year}
        onChange={onChangeHandler}
      />
      <input
        type="text"
        name="type"
        placeholder="type"
        value={inputs.type}
        onChange={onChangeHandler}
      />
      <input
        type="text"
        name="img"
        placeholder="img"
        value={inputs.img}
        onChange={onChangeHandler}
      />
      <button type="submit">Send</button>
    </form>
  );
}
