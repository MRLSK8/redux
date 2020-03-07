const INITIAL_STATE = [
  { id: 1, text: 'Fazer café' },
  { id: 2, text: 'Comprar pão' },
  { id: 3, text: 'Fazer trabalho do Smart' },
  { id: 4, text: 'Cortar o cabelo e barba' }
];

export default function ToDo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload }];
    default:
      return state;
  }
}
