import { useState, useEffect } from 'react';

export default function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return {
    count,
    incrementCount,
  };
}
