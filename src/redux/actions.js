import shortid from 'shortid';

export const Type = {
  GET_BUDGET: 'GET_BUDGET',
  ADD_EXPENSE: 'ADD_EXPENSE',
  DELETE_EXPENSE: 'DELETE_EXPENSE',
};

export const getBudget = value => ({
  type: Type.GET_BUDGET,
  payload: value,
});

export const addExpense = expense => ({
  type: Type.ADD_EXPENSE,
  payload: {
    id: shortid.generate(),
    ...expense,
  },
});

export const deleteExpense = id => ({
  type: Type.DELETE_EXPENSE,
  payload: id,
});
