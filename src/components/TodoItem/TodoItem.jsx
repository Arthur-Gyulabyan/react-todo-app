import React from 'react';
// import classNames from 'classnames';

export default function TodoItem({ text, id }) {
  return (
    <li className="flex justify-between" id={id}>
      <p>{text}</p>

      <div>
        <button type="button">Done</button>
        <button type="button">Edit</button>
        <button type="button">Delete</button>
      </div>
    </li>
  );
}
