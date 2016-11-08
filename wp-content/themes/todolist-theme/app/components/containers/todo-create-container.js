import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import store from '../../store';
import { loadToDoLayout } from '../../actions/todo-layout-actions';

const ToDoLayOutContainer = React.createClass({

	componentDidMount: function() {
	    store.dispatch(loadToDoLayout('create', 'create your todo:'));
	},

	render: function() {
		return (
			<form>
				<div className="form-group">
					<label htmlFor="inputTitle">Enter title of todo</label>
					<input type="text" className="form-control" id="inputTitle" name="inputTitle" placeholder="Enter Title" />
				</div>
				<div className="form-group">
					<label htmlFor="inputDescription">Enter description of todos</label>
					<textarea className="form-control" id="inputDescription" name="inputDescription" rows={3} defaultValue={""} />
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
				</div>
				<div className="form-group">
					<label htmlFor="inputTitle">Enter categories, separate each category by comma</label>
					<input type="text" className="form-control" id="inputTitle" name="inputTitle" placeholder="Enter Title" />
				</div>
				<div className="form-group">
					<label htmlFor="inputPriority">Select priority</label>
					<select className="form-control" id="inputPriority">
						<option>Low</option>
						<option>Medium</option>
						<option>High</option>
					</select>
				</div>
				<div className="clearfix"></div>

				<button type="submit" className="btn btn-primary">Save</button>
			</form>
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

export default connect(mapStateToProps)(ToDoLayOutContainer);
