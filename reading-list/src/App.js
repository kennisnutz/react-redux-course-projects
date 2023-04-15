import { useEffect } from 'react';
import { useContext } from 'react';
import BookContext from './context/BookContext';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const { getAllBooks } = useContext(BookContext);

  useEffect(() => {
    getAllBooks();
  }, [getAllBooks]);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
