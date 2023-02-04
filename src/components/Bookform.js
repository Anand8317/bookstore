import React from 'react';
import { useDispatch } from 'react-redux';
import { addBookAction } from '../redux/books/books';

const bookObject = (title, author, category) => ({
  item_id: Math.random().toString(36),
  title,
  author,
  category,
});

export default function Bookform() {
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.preventDefault();
    const title = document.getElementById('titleIn').value;
    const author = document.getElementById('authorIn').value;
    const category = document.getElementById('categoryIn').value;

    if (title !== '' && author !== '') {
      dispatch(addBookAction(bookObject(title, author, category)));
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
      document.getElementById('author').value = 'Fiction';
    }
  };

  return (
    <div className="addBook-container">
      <h2 className="addBookH2">Add New Book</h2>
      <form>
        <input type="text" id="titleIn" placeholder="Book title" />
        <input type="text" id="authorIn" placeholder="Book author" />
        <select id="categoryIn">
          <option value="Fiction">Fiction</option>
          <option value="Computer-Science">Computer Science</option>
          <option value="Horror">Horror</option>
        </select>
        <button type="submit" className="addBookBtn" onClick={clickHandler}>Add Book</button>
      </form>
    </div>
  );
}
