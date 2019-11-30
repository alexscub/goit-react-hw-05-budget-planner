import { connect } from 'react-redux';
import { deleteExpense } from '../../redux/actions';
import ExpensesTable from './ExpensesTable';

const mapStateToProps = state => ({
  items: state.expenses,
});

const mapDispatchToProps = {
  deleteExpense,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
