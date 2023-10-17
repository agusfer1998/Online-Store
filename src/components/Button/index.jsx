import './index.scss';
import cn from 'classnames';
import { PropTypes } from 'prop-types';
import React from 'react';

const Button = ({ name, type, isDisabled, value, onClick }) => (
  <button
    className={cn('custom-button', {
      'custom-button--secondary': type === 'secondary',
    })}
    name={name}
    type={type}
    disabled={isDisabled}>
    {value}
  </button>
);

Button.propTypes = {
  isDisabled: PropTypes.bool,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default Button;
