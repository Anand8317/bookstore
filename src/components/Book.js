import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAction } from '../redux/books/books';

export default function Book(props) {
  const { title, author, id1 } = props;
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(removeBookAction(id1));
  };

  return (
    <li>
      <h3>{title}</h3>
      <p>{author}</p>
      <button type="button" onClick={clickHandler}>Delete</button>
    </li>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id1: PropTypes.string.isRequired,
};
