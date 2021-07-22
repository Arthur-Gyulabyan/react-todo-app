import React from 'react';
import classNames from 'classnames';
import TodoItem from '../TodoItem/TodoItem';
import Input from '../Input/Input';
import getUniqueId from '../../helpers/idGenerator';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      currentText: '',
    };
  }

  addItem = (e, currentText) => {
    if (e.key === 'Enter' || e.type === 'click') {
      const id = getUniqueId();

      if (currentText) {
        this.setState(prevState => {
          return {
            items: [
              ...prevState.items,
              { text: currentText, id, isCompleted: false },
            ],
            currentText: '',
          };
        });
      }
    }
  };

  toggleComplete = (e, id) => {
    const { items } = this.state;
    const index = items.findIndex(el => el.id === id);
    const newItems = items.filter(el => el.id !== id);

    this.setState(prevState => {
      return {
        items: [
          ...newItems,
          {
            ...prevState.items[index],
            isCompleted: !prevState.items[index].isCompleted,
          },
        ],
      };
    });
  };

  deleteItem = (e, id) => {
    const { items } = this.state;
    const newItems = items.filter(el => el.id !== id);

    this.setState(() => {
      return {
        items: newItems,
      };
    });
  };

  inputChangeHandler = e => {
    this.setState({ currentText: e.target.value });
  };

  render() {
    const { items, currentText } = this.state;
    const todoClassnames = classNames({
      'w-1/3': true,
      'p-5': true,
      'bg-gray-300': true,
    });

    return (
      <div className={todoClassnames}>
        <Input
          placeholder="What you should do..."
          enterHandler={this.addItem}
          changeHandler={this.inputChangeHandler}
          currenText={currentText}
        />
        <ul>
          {items.map(item => {
            return (
              <TodoItem
                text={item.text}
                key={item.id}
                checkHandler={e => this.toggleComplete(e, item.id)}
                deleteHandler={e => this.deleteItem(e, item.id)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
