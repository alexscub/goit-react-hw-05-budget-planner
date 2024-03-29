import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #3f51b5;
  border: 0;
  outline: 0;
  padding: 8px 24px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.05);
  font: inherit;
  text-transform: uppercase;
  user-select: none;

  transition: background-color 200ms ease-in-out;

  &:hover {
    box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.15);
    background-color: #303f9f;
  }
  &[disabled] {
    pointer-events: none;
    background-color: #bdbdbd;
  }
`;

const Button = ({ type, label, onClick, disable }) => (
  <StyledButton type={type} onClick={onClick} disabled={disable}>
    {label}
  </StyledButton>
);

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  disable: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  label: '',
  onClick: () => null,
  disable: false,
};
