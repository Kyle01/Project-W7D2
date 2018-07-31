import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import {receiveTodo, receiveTodos} from './actions/todo_actions';
import Root from './components/root.jsx';
import allTodos from './reducers/selectors.js';


document.addEventListener('DOMContentLoaded', () => {

  let store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.store.getState();
  ReactDOM.render(<Root store={store}/>, document.getElementById('main'));
  window.allTodos = allTodos;

});
