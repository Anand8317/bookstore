import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatusAction } from '../redux/categories/categories';

export default function Category() {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(checkStatusAction());
  };

  return (
    <div className="categoryContainer">
      <h1>Under construction</h1>
      <button type="submit" className="categoryBookBtn" onClick={clickHandler}>Check Status</button>
    </div>
  );
}
