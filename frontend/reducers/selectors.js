import Redux from 'redux';


export const allTodos = ({ todos }) => {
  let arr = [];
  return Object.keys(todos).map(id => todos[id]);
};
