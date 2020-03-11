export const addToDo = text => ({
  type: 'ADD_TODO',
  payload: text
});

export const removeToDo = id => ({
  type: 'REMOVE_TODO',
  payload: { id }
});
