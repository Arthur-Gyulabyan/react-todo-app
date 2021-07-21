import React from 'react';
// import classNames from 'classnames';
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

      this.setState(prevState => {
        return {
          items: [...prevState.items, { text: currentText, id }],
        };
      });
    }
  };

  inputChangeHandler = e => {
    this.setState({ currentText: e.target.value });
  };

  render() {
    const { items, currentText } = this.state;

    return (
      <div>
        <Input
          placeholder="What you should do..."
          enterHandler={this.addItem}
          changeHandler={this.inputChangeHandler}
          currenText={currentText}
        />
        <ul>
          {items.map(item => {
            return <TodoItem text={item.text} key={item.id} />;
          })}
        </ul>
      </div>
    );
  }
}
