import axios from 'axios';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/zUNbnSD5o8fDolrjpyEa/books';

const fetchBookAction = () => async (dispatch) => {
  const res = await axios.get(url);
  const book = Object.keys(res.data).map((id) => ({
    ...res.data[id][0],
    item_id: id,
  }));
  dispatch({
    type: FETCH_BOOKS,
    book,
  });
};

const addBookAction = (book) => async (dispatch) => {
  await axios.post(url, book);
  dispatch({
    type: ADD,
    book,
  });
};

const removeBookAction = (key) => async (dispatch) => {
  await axios.delete(`${url}/${key}`);
  dispatch({
    type: REMOVE,
    key,
  });
};

export function booksReducer(state = [], action) {
  switch (action.type) {
    case FETCH_BOOKS:
      return action.book;
    case ADD: return [...state, action.book];
    case REMOVE: {
      const index = state.findIndex((obj) => obj.item_id === action.key);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
    }
    default: return state;
  }
}

export { fetchBookAction, addBookAction, removeBookAction };
