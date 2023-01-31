import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatusAction } from '../redux/categories/categories';

export default function Category() {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(checkStatusAction());
  };

  return (
    <div>
      <button type="button" onClick={clickHandler}>Check Status</button>
    </div>
  );
}
