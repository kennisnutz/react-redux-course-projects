import { useState, useEffect } from 'react';
import { useContext } from 'react';
import BookContext from './context/BookContext';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

import axios from 'axios';

function App() {
  const { books, getAllBooks, deleteBookById, editBookById, createBook } =
    useContext(BookContext);

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
