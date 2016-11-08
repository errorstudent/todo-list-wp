import React from 'react';

// Using "Stateless Functional Components"
export default React.createClass({
  createMarkup(html) {
      return {
          __html: html
      };
  },

  render: function() {
    return (
        <div className={"todo todo-" + this.props.id}>
          <h2 className="todo-title">{this.props.title.rendered}</h2>

          <div dangerouslySetInnerHTML={this.createMarkup(this.props.content.rendered)} />

          <div className="categories">
              {this.props.categories.map(function(name, index){
                  return <span key={ index } className="category">{name}</span>;
              })}
          </div>

          <span className="priority">{this.props.acf.priority}</span>
      </div>
      );
    }
});
