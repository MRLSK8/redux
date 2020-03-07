import React from 'react';
import { connect } from 'react-redux';

const ToDoList = ({ ToDo, addToDo }) => {
  return (
    <>
      <ul>
        {ToDo.map(ToDo => (
          <li key={ToDo.id}>{ToDo.text}</li>
        ))}
      </ul>
      <button onClick={() => addToDo('Falar com Yasmin')}>Add</button>
    </>
  );
};

const mapStateToProps = state => ({
  ToDo: state.ToDo
});

const mapDispatchToProps = dispatch => ({
  addToDo: text => dispatch({ type: 'ADD_TODO', payload: text })
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
