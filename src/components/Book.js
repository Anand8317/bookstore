import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Progress } from 'antd';
import { removeBookAction } from '../redux/books/books';

export default function Book(props) {
  const {
    title, author, id1, category,
  } = props;
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(removeBookAction(id1));
  };

  const progress = Math.floor(Math.random() * 50 + 20);
  const chapter = Math.floor(Math.random() * 25 + 7);

  return (
    <div className="bookContainer">
      <div className="book-and-button">
        <p id="category">{category}</p>
        <h2 id="title">{title}</h2>
        <p id="author">{author}</p>
        <div className="buttonsContainer">
          <button type="button">Comments</button>
          <button type="button" onClick={clickHandler}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="prog-chapt">
        <div className="progressBar">
          <Progress
            type="circle"
            width={80}
            format={() => ''}
            strokeWidth={10}
            strokeColor={{
              '0%': '#307bbe',
              '100%': '#379cf6',
            }}
            trailColor="#e8e8e8"
            percent={progress}
          />
          <div className="percent">
            <h2 id="percent">
              {progress}
              %
            </h2>
            <p>Completed</p>
          </div>
        </div>
        <div className="currentChapt">
          <p id="chapthead">CURRENT CHAPTER</p>
          <p id="chaptname">
            Chapter
            {chapter}
          </p>
          <button id="update" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
    // <li>
    //   <h3>{title}</h3>
    //   <p>{author}</p>
    //   <button type="button" onClick={clickHandler}>Delete</button>
    // </li>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id1: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
