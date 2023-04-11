import React, { useState } from 'react';
import './searchbar.css';

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input
          placeholder="Enter your desired image"
          onChange={handleChange}
          value={term}
        />
      </form>
    </div>
  );
};

export default SearchBar;

//
