import React from 'react';

export default function Bookform() {
  return (
    <div>
      <h2>Add New Book</h2>
      <form>
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Book author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
