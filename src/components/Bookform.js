import React from 'react';
import { useDispatch } from 'react-redux';
import { addBookAction } from '../redux/books/books';

const bookObject = (title, author) => ({
  item_id: Math.random().toString(36),
  title,
  author,
  category: 'Fiction',
});

export default function Bookform() {
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;

    if (title !== '' && author !== '') {
      dispatch(addBookAction(bookObject(title, author)));
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
    }
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form>
        <input type="text" id="title" placeholder="Book title" />
        <input type="text" id="author" placeholder="Book author" />
        <button type="submit" onClick={clickHandler}>Add Book</button>
      </form>
    </div>
  );
}
