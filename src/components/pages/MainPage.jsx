import React, { useState } from 'react';

export default function MainPage() {
  const [counter, setCounter] = useState(0);

  console.log(counter);
  return (
    <>
      <div>MainPage</div>
      <div>
        <p>{counter}</p>
        {' '}
        <button
          type="button"
          onClick={() => setCounter(counter + 1)}
        >
          Count
        </button>
      </div>
    </>
  );
}
