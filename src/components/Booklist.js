import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import BookForm from './Bookform';
import { fetchBookAction } from '../redux/books/books';

export default function Booklist() {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchBookAction()); }, [dispatch]);
  const books = useSelector((state) => state.booksReducer);

  return (
    <div>
      <div>
        <ul>
          {books.map((book) => (
            <Book
              title={book.title}
              author={book.author}
              key={book.item_id}
              id1={book.item_id}
            />
          ))}
        </ul>
      </div>
      <BookForm />
    </div>
  );
}
