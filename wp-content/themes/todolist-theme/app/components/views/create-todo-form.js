import React from 'react';

export default React.createClass({

	getParams: function() {
		return this.refs;
	},

	render: function() {
		return (
			<form onSubmit={this.props.create}>
				<div className="form-group">
					<label htmlFor="inputTitle">Enter title of todo</label>
					<input type="text" className="form-control" id="inputTitle" ref="inputTitle"/>
				</div>
				<div className="form-group">
					<label htmlFor="inputDescription">Enter description of todos</label>
					<textarea className="form-control" id="inputDescription" ref="inputDescription" rows={3} defaultValue={""} />
				</div>
				<div className="form-group">
					<label htmlFor="inputCategories">Enter categories, separate each category by comma</label>
					<input type="text" className="form-control" id="inputCategories" ref="inputCategories"/>
				</div>
				<div className="form-group">
					<label htmlFor="inputPriority">Select priority</label>
					<select className="form-control" id="inputPriority" ref="inputPriority">
						<option value="low">Low</option>
						<option value="medium">Medium</option>
						<option value="high">High</option>
					</select>
				</div>
				<div className="clearfix"></div>

				<button className="btn btn-primary">Save</button>
			</form>
		);
	}

});
