import React from 'react';
import { connect } from 'react-redux';
import ToDoList from '../views/todo-list';
import * as toDoApi from '../../api/todo-api';
import store from '../../store';
import { loadToDoLayout } from '../../actions/todo-layout-actions';

const ToDoListContainer = React.createClass({

	componentDidMount: function() {
		toDoApi.getToDos();
		store.dispatch(loadToDoLayout('todos', 'here are your list of todos'));
	},

	render: function() {
		return (
			<ToDoList todos={this.props.todos} deleteTodo={toDoApi.deleteTodo} />
		);
	}

});

const mapStateToProps = function(store) {
	return {
		todos: store.toDoState.todos
	};
};

export default connect(mapStateToProps)(ToDoListContainer);
