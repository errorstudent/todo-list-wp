import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as userApi from '../../api/user-api';

const ToDoLayOutContainer = React.createClass({

	componentDidMount: function() {
		userApi.getUser();
	},

	createMarkup(html) {
		return {
			__html: html
		};
	},

	render: function() {
		return (
			<div className="container">
                <div className="row">
					<header className="todo-header">
	                    <div className="col-xs-9">
							<h1>Hi {this.props.user.name},</h1>

							<h2 dangerouslySetInnerHTML={this.createMarkup(this.props.title)} />
							{((this.props.page == 'todo') || this.props.page == 'create') &&
								<div className="navigation">
									<Link to="/" className="nav-link">&lt; Home</Link>
								</div>
							}
						</div>
                        <div className="col-xs-3 text-xs-center">
                            <Link to="/create" className="btn btn-outline-success btn-sm">Create</Link>
                        </div>
					</header>
				</div>
                <div className="row">
                    <div className="col-sm-6">
						<div className="todo-results">
							{this.props.children}
						</div>
					</div>
				</div>
			</div>
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
