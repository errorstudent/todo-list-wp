import React from 'react';
import { connect } from 'react-redux';
import ToDoListDetail from '../views/todo-list-detail';
import * as toDoApi from '../../api/todo-api';
import store from '../../store';
import { loadToDoLayout } from '../../actions/todo-layout-actions';

const ToDoListDetailContainer = React.createClass({

  componentDidMount: function() {
    let todoId = this.props.params.todoId
    toDoApi.getToDo(todoId)
    store.dispatch(loadToDoLayout('todo', 'here&lsquo;s your todo'));
  },

  render: function() {
    return (
      <ToDoListDetail {...this.props.todo} />
    );
  }

});

const mapStateToProps = function(store) {
  return {
    todo: store.toDoState.todo
  };
};

export default connect(mapStateToProps)(ToDoListDetailContainer);
