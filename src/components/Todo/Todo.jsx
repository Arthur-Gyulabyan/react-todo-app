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
              { text: currentText, id, isCompleted: false, isEditable: false },
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
    items[index].isCompleted = !items[index].isCompleted;

    this.setState({ items });
  };

  toggleEdit = (e, id) => {
    const { items } = this.state;
    const index = items.findIndex(el => el.id === id);

    items[index].isEditable = !items[index].isEditable;

    this.setState({ items });
  };

  editItem = (e, id, text) => {
    if (e.key === 'Enter' || e.type === 'click') {
      const { items } = this.state;
      const index = items.findIndex(el => el.id === id);

      if (text === '') {
        this.deleteItem(e, id);
        return;
      }

      items[index].text = text;
      this.toggleEdit(e, id);
      this.setState({ items });
    }
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

  editInputChangeHandler = (e, id) => {
    const { items } = this.state;
    const index = items.findIndex(el => el.id === id);

    items[index].text = e.target.value;
    this.setState({ items });
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
                editHandler={e => this.toggleEdit(e, item.id)}
                editInputHandler={e => this.editInputChangeHandler(e, item.id)}
                editItem={e => this.editItem(e, item.id, item.text)}
                deleteHandler={e => this.deleteItem(e, item.id)}
                isCompleted={item.isCompleted}
                isEditable={item.isEditable}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
