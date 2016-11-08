import React from 'react';

export default React.createClass({

  getQuery: function() {
    return this.refs.todo.value;
  },

  render: function() {
    return (
      <form onSubmit={this.props.todo} className="todo">
        <input type="text" ref="todo" placeholder="Search" />
        <button>Search</button>
      </form>
    );
  }

});
