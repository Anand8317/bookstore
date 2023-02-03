const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = [{
  id: '1',
  title: 'One',
  author: 'One by One',
},
{
  id: '2',
  title: 'Two',
  author: 'Two by Two',
}];

export function addBookAction(book) {
  return {
    type: ADD,
    book,
  };
}

export function removeBookAction(key) {
  return {
    type: REMOVE,
    key,
  };
}

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case ADD: return [...state, action.book];
    case REMOVE: {
      const index = state.findIndex((obj) => obj.id === action.key);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
    }
    default: return state;
  }
}
