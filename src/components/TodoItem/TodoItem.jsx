import React from 'react';
import classNames from 'classnames';
import { ReactComponent as CheckIcon } from '../../assets/icons/check-double-solid.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit-regular.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/trash-alt-regular.svg';
import Button from '../Button/Button';

export default function TodoItem({ text, id }) {
  const listItemClassnames = classNames(
    'flex',
    'justify-between',
    'px-4',
    'py-2',
    'my-1',
    'border-2',
    'border-green-500',
    'font-serif',
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
      <p className="text-2xl">{text}</p>

      <div className="flex items-center">
        <Button btnClassNames={checkButtonClassnames}>
          <CheckIcon />
        </Button>
        <Button btnClassNames={editButtonClassnames}>
          <EditIcon />
        </Button>
        <Button btnClassNames={deleteButtonClassnames}>
          <DeleteIcon />
        </Button>
      </div>
    </li>
  );
}
