import { useState, useContext } from 'react';
import BookContext from '../context/BookContext';

function BookEdit({ book, onSubmit }) {
  const { editBookById } = useContext(BookContext);
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };
  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>title</label>
      <input value={title} className="input" onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
