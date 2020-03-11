import React from 'react';
import { connect } from 'react-redux';
import * as ToDoActions from '../store/actions/ToDo';
import { bindActionCreators } from 'redux';

const ToDoList = ({ ToDo, addToDo, removeToDo }) => {
  return (
    <>
      <ul>
        {ToDo.map(ToDo => (
          <li key={ToDo.id}>
            {ToDo.text} <button onClick={() => removeToDo(ToDo.id)}>X</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addToDo('Estudar Redux')}>Add</button>
    </>
  );
};

const mapStateToProps = state => ({
  ToDo: state.ToDo
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ToDoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
