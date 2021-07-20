import React from 'react';
// import classNames from 'classnames';
import TodoItem from '../TodoItem/TodoItem';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  addItem = e => {
    if (e.key === 'Enter') {
      const text = e.target.value;
      this.setState(prevState => {
        return { items: [...prevState.items, { text }] };
      });
    }
  };

  render() {
    const { items } = this.state;
    console.log(items);

    return (
      <div>
        <input
          onKeyPress={this.addItem}
          type="text"
          placeholder="What you should do..."
        />
        <ul className="list-disc">
          {items.map(item => {
            return <TodoItem text={item.text} />;
          })}
        </ul>
      </div>
    );
  }
}
