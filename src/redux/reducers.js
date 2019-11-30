import { combineReducers } from 'redux';
import { Type } from './actions';

const budget = (state = 0, { type, payload }) => {
  switch (type) {
    case Type.GET_BUDGET:
      return payload;
    default:
      return state;
  }
};
const expenses = (state = [], { type, payload }) => {
  switch (type) {
    case Type.ADD_EXPENSE:
      return [...state, payload];
    case Type.DELETE_EXPENSE:
      return state.filter(el => el.id !== payload);
    default:
      return state;
  }
};

export default combineReducers({
  budget,
  expenses,
});
