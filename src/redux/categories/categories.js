const CHECKSTATUS = 'bookstore/categories/CHECKSTATUS';

const initialState = [];

export function checkStatusAction() {
  return {
    type: CHECKSTATUS,
  };
}

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CHECKSTATUS: return 'Under construction';
    default: return state;
  }
}
