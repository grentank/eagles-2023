import React, { useEffect, useState } from 'react';

export default function MainPage() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter((prev) => prev + 1);
  }, []);

  console.log('2 counter: ', counter);

  return (
    <>
      <div>MainPage</div>
      <div>
        <p>{counter}</p>{' '}
        <button type="button" onClick={() => setCounter(counter + 1)}>
          Count
        </button>
      </div>
    </>
  );
}
