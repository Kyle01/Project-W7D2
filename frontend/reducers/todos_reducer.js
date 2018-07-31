
import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions.js';
import { merge } from 'lodash';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      const todos = {};
      action.todos.forEach(el => todos[el.id] = el);
      return todos;
    case RECEIVE_TODO:
      let nextTodo = merge({}, state);
      nextTodo[action.todo.id] = action.todo;
      return nextTodo;
    default:
      return state;
  }
};

export default todosReducer;
