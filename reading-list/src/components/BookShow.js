import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';
import BookeEdit from './BookEdit';

function BookShow({ book }) {
  const { deleteBookById } = useBooksContext();

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle) => {
    setShowEdit(false);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookeEdit book={book} onSubmit={handleSubmit} />;
  }
  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="picsum" />
      {content}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          {' '}
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
