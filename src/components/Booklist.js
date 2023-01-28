import React, { useState } from 'react';
import Book from './Book';
import BookForm from './Bookform';

export default function Booklist() {
  const [books] = useState([{
    id: 1,
    title: 'One',
    author: 'One by One',
  },
  {
    id: 2,
    title: 'Two',
    author: 'Two by Two',
  }]);

  return (
    <div>
      <div>
        <ul>
          {books.map((book) => (<Book title={book.title} author={book.author} key={book.id} />))}
        </ul>
      </div>
      <BookForm />
    </div>
  );
}
