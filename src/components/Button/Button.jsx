import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ children, btnClassNames, clickHandler }) {
  return (
    <button type="button" className={btnClassNames} onClick={clickHandler}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  btnClassNames: '',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  btnClassNames: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};
