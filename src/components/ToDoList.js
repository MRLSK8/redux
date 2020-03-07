import React from 'react';
import { connect } from 'react-redux';

const ToDoList = props => {
  return (
    <ul>
      {props.ToDo.map(ToDo => (
        <li key={ToDo.id}>{ToDo.text}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => ({
  ToDo: state.ToDo
});

export default connect(mapStateToProps)(ToDoList);
