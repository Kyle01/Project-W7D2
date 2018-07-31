import React from 'react';
import Todoform from './todo_form';
import uniqueId from '../../util';

class TodoList extends React.Component{

  render() {
    return (
      <div>
        <Todoform />
        <h3>Current Todo list</h3>
        <ul>
        {this.props.todos.map(el => <li>{el.title}</li>)}
        </ul>
      </div>
    );
  }
}
export default TodoList;
