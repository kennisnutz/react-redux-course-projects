import React from 'react';

function Button() {
  function handleClick() {
    alert('You clicked me!');
  }
  return <button onClick={handleClick}> My button</button>;
}

export default Button;
