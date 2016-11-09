import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory  } from 'react-router';
import * as toDoApi from '../../api/todo-api';
import store from '../../store';
import { loadToDoLayout } from '../../actions/todo-layout-actions';
import CreateForm from '../views/create-todo-form';

const ToDoCreateContainer = React.createClass({

	componentDidMount: function() {
	    store.dispatch(loadToDoLayout('create', 'create your todo:'));
	},

	create: function(event) {
	    event.preventDefault();
	    let params = this.refs.child.getParams();

		var result = toDoApi.createToDo(params);
	},

	render: function() {
		return (
			<CreateForm create={this.create} ref="child" />
		);
	}

});

const mapStateToProps = function(store) {

	return {
		page: store.toDoLayoutState.page,
		title: store.toDoLayoutState.title,
		user: store.userState.user
	};

};

export default connect(mapStateToProps)(ToDoCreateContainer);
