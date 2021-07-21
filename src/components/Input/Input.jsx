import React from 'react';

export default function Input({
  placeholder,
  enterHandler,
  currenText,
  changeHandler,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        onKeyPress={e => enterHandler(e, currenText)}
        onChange={changeHandler}
      />
      <button type="button" onClick={e => enterHandler(e, currenText)}>
        Add
      </button>
    </div>
  );
}
