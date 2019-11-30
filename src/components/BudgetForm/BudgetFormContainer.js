import { connect } from 'react-redux';
import { getBudget } from '../../redux/actions';
import BudgetForm from './BudgetForm';

const mapDispatchToProps = {
  getBudget,
};

export default connect(null, mapDispatchToProps)(BudgetForm);
