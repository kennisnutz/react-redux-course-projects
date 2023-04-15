import { useState, useCallback, createContext } from 'react';
import axios from 'axios';

const BookContext = createContext();

export function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const getAllBooks = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  }, []);

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });

    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        getAllBooks,
        deleteBookById,
        editBookById,
        createBook,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export default BookContext;
