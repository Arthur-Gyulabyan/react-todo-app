import React from 'react';
import classNames from 'classnames';

export default function Button({ children, btnClassNames, clickHandler }) {
  return (
    <button type="button" className={btnClassNames} onClick={clickHandler}>
      {children}
    </button>
  );
}
