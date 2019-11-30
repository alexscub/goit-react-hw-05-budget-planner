import { connect } from 'react-redux';
import Values from './Values';

const mapStateToProps = state => ({
  budget: state.budget,
  expenses: state.expenses.reduce(
    (total, expense) => total + +expense.amount,
    0,
  ),
  balance:
    state.budget -
    state.expenses.reduce((total, expense) => total + +expense.amount, 0),
});

export default connect(mapStateToProps)(Values);
