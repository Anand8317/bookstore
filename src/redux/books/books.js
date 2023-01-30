const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const initialState = [];

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
    case ADD: return state.push(action.book);
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
