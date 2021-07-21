import React from 'react';
import classNames from 'classnames';
import Todo from './components/Todo/Todo';
import './App.css';

function App() {
  const appClassnames = classNames({
    flex: true,
    'place-content-center': true,
    'mt-10': true,
  });
  return (
    <div className={appClassnames}>
      <Todo />
    </div>
  );
}

export default App;
