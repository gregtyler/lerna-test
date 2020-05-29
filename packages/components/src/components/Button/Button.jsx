import React from 'react';
import PropTypes from 'prop-types';
import 'govuk-frontend/govuk/components/button/_button.scss';

const Button = ({ disabled, onClick, type, isStartButton, classes, children }) => (
  <button
    className={(
      'govuk-button ' +
      (type === 'secondary' ? ' govuk-button--secondary ' : '') +
      (type === 'warning' ? ' govuk-button--warning ' : '') +
      (isStartButton ? ' govuk-button--start ' : '') +
      (classes || '')
    ).trim()}
    disabled={disabled}
    onClick={onClick}
  >
    { children }
    { isStartButton && (
       <svg className="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
      </svg>
    )}
  </button>
)

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf([null, 'secondary', 'warning']),
  isStartButton: PropTypes.bool,
  classes: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Button
