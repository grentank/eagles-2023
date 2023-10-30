import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MovieEditForm({ movie }) {
  const { movieId } = useParams();
  console.log(movieId);

  const [inputs, setInputs] = useState({
    title: movie.title,
    year: movie.year,
    type: movie.type,
    img: movie.img,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/movies/${movieId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputs),
    });

    if (response.status === 200) {
      window.location.href = '/movies';
    }
  };

  const onChangeHandler = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    console.log(event.target.name, event.target.value);
  };

  return (

    <form className="d-flex row col-3" onSubmit={handleSubmit}>
      <input className="form-control m-2" type="text" name="title" placeholder="title" value={inputs.title} onChange={onChangeHandler} />
      <input className="form-control m-2" type="number" name="year" placeholder="year" value={inputs.year} onChange={onChangeHandler} />
      <input className="form-control m-2" type="text" name="type" placeholder="type" value={inputs.type} onChange={onChangeHandler} />
      <input className="form-control m-2" type="text" name="img" placeholder="img" value={inputs.img} onChange={onChangeHandler} />
      <button className="btn btn-outline-success m-2" type="submit">Send</button>
    </form>
  );
}
