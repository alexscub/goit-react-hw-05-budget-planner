import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../shared/Form';
import Label from '../shared/Label';
import Input from '../shared/Input';
import Button from '../shared/Button';

const labelStyles = `
  margin-bottom: 16px;  
`;

export default class BudgetForm extends Component {
  state = {
    value: 0,
  };

  handleChange = e => {
    this.setState({
      value: Number(e.target.value),
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getBudget(this.state.value);
    this.setState({
      value: 0,
    });
  };

  render() {
    const { value } = this.state;
    const disable = value <= 0;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label customStyles={labelStyles}>
          Enter your total budget
          <Input type="number" value={value} onChange={this.handleChange} />
        </Label>

        <Button label="Save" type="submit" disable={disable} />
      </Form>
    );
  }
}
BudgetForm.propTypes = {
  getBudget: PropTypes.func.isRequired,
};
