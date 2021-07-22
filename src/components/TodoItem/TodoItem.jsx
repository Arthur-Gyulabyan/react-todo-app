import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ReactComponent as CheckIcon } from '../../assets/icons/check-double-solid.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit-regular.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/trash-alt-regular.svg';
import Button from '../Button/Button';

export default function TodoItem({
  text,
  id,
  checkHandler,
  editHandler,
  editInputHandler,
  editItem,
  deleteHandler,
  isCompleted,
  isEditable,
}) {
  const listItemClassnames = classNames(
    'flex',
    'justify-between',
    'px-4',
    'py-2',
    'my-1',
    'border-2',
    'border-green-500',
    'font-serif',
    {
      'shadow-inner': isCompleted,
    },
  );

  const listItemTextClassnames = classNames('text-2xl', {
    'line-through': isCompleted,
    hidden: isEditable,
  });

  const inputFieldClassnames = classNames(
    'text-2xl',
    'bg-gray-400',
    'outline-none',
    'w-full',
    {
      hidden: !isEditable,
    },
  );

  const checkButtonClassnames = classNames(
    'inline-block',
    'w-6',
    'ml-2',
    'text-green-500',
    'hover:text-green-700',
  );
  const editButtonClassnames = classNames(
    'inline-block',
    'w-6',
    'ml-2',
    'text-blue-500',
    'hover:text-blue-700',
  );
  const deleteButtonClassnames = classNames(
    'inline-block',
    'w-6',
    'ml-2',
    'text-red-500',
    'hover:text-red-700',
  );

  return (
    <li className={listItemClassnames} id={id}>
      <p
        className={listItemTextClassnames}
        title={text.length > 20 ? text : ''}>
        {text.length > 20 ? `${text.slice(0, 20)}...` : text}
      </p>

      {isEditable ? (
        <input
          type="text"
          defaultValue={text}
          className={inputFieldClassnames}
          onChange={editInputHandler}
          onKeyPress={e => editItem(e, e.target.value)}
          /* eslint-disable-next-line jsx-a11y/no-autofocus */
          autoFocus
        />
      ) : null}

      <div className="flex items-center">
        <Button
          btnClassNames={checkButtonClassnames}
          clickHandler={checkHandler}>
          <CheckIcon />
        </Button>
        <Button
          btnClassNames={editButtonClassnames}
          clickHandler={
            isEditable
              ? e => {
                  editItem(e);
                }
              : editHandler
          }>
          <EditIcon />
        </Button>
        <Button
          btnClassNames={deleteButtonClassnames}
          clickHandler={deleteHandler}>
          <DeleteIcon />
        </Button>
      </div>
    </li>
  );
}

TodoItem.defaultProps = {
  text: 'Some text...',
  id: Date.now(),
  isCompleted: false,
  isEditable: false,
};

TodoItem.propTypes = {
  text: PropTypes.string,
  id: PropTypes.number,
  checkHandler: PropTypes.func.isRequired,
  editHandler: PropTypes.func.isRequired,
  editInputHandler: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool,
  isEditable: PropTypes.bool,
};
