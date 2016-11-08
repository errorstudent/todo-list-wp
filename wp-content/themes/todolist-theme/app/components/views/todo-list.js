import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
	return (
		<div className="data-list">

			{props.todos.map(todo => {

				return (
					<div key={todo.id} className={"todo todo-" + todo.id}>
						<Link to={"/" + todo.id} className="nav-link">
							<h2>{todo.title.rendered}</h2>
						</Link>
						<button onClick={props.deleteTodo.bind(null, todo.id)} className="btn btn-outline-secondary btn-sm btn-delete">Delete</button>
					</div>
				);

			})}

		</div>
	);
}
