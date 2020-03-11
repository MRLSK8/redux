const INITIAL_STATE = [{ id: 1, text: 'Fazer café' }];

export default function ToDo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload }];
    case 'REMOVE_TODO':
      return state.filter(toDo => toDo.id !== action.payload.id);
    default:
      return state;
  }
}
