import React from 'react';
import Todo from './components/Todo/Todo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Todo />
      <div className="p-6 items-center justify-center">
        <h1 className="text-blue-400 font-extrabold">Hello World!</h1>
        <p className="tracking-widest">This is my first React App.</p>
      </div>
    </div>
  );
}

export default App;
