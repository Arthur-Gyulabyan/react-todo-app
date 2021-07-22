import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ReactComponent as PlusIcon } from '../../assets/icons/plus-solid.svg';
import Button from '../Button/Button';

export default function Input({
  placeholder,
  enterHandler,
  currenText,
  changeHandler,
}) {
  const inputClassnames = classNames(
    'outline-none',
    'w-full',
    'px-3',
    'text-lg',
    'text-gray-700',
    'border-2',
    'border-r-0',
    'border-green-500',
    'focus:border-green-700',
  );

  const addBtnClassnames = classNames(
    'flex',
    'items-center',
    'text-gray-700',
    'border-2',
    'border-green-500',
    'hover:bg-green-500',
    'hover:text-white',
    'duration-200',
    'p-1',
    'w-28',
  );

  return (
    <div className="flex">
      <input
        type="text"
        placeholder={placeholder}
        onKeyPress={e => enterHandler(e, currenText)}
        onChange={changeHandler}
        value={currenText}
        className={inputClassnames}
      />
      <Button
        type="button"
        btnClassNames={addBtnClassnames}
        clickHandler={e => enterHandler(e, currenText)}>
        <span className="text-2xl font-serif">Add</span>
        <PlusIcon />
      </Button>
    </div>
  );
}

Input.defaultProps = {
  placeholder: 'Some text...',
  currenText: 'Some text...',
};

Input.propTypes = {
  placeholder: PropTypes.string,
  enterHandler: PropTypes.func.isRequired,
  currenText: PropTypes.string,
  changeHandler: PropTypes.func.isRequired,
};
