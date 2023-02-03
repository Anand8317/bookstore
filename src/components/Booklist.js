import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './Bookform';

export default function Booklist() {
  const books = useSelector((state) => state.booksReducer);

  return (
    <div>
      <div>
        <ul>
          {books.map((book) => (
            <Book
              title={book.title}
              author={book.author}
              key={book.id}
              id1={book.id}
            />
          ))}
        </ul>
      </div>
      <BookForm />
    </div>
  );
}
