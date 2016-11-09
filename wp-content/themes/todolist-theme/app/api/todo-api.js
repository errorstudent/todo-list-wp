import axios from 'axios';
import store from '../store';
import { Link, browserHistory  } from 'react-router';
import { getToDosSuccess, deleteToDoSuccess, getToDoSuccess, createToDoSuccess } from '../actions/todo-actions';

/**
 * Get all ToDo
 */
 export function getToDos() {
	return axios.get('http://todo-list.dev/wp-json/wp/v2/posts')
	.then(response => {
		store.dispatch(getToDosSuccess(response.data));
		return response;
	});
}


/**
 * Get ToDo
 */

 export function getToDo(todoId) {
	return axios.get('http://todo-list.dev/wp-json/wp/v2/posts/' + todoId)
	.then(response => {
		store.dispatch(getToDoSuccess(response.data));
		return response;
	});

}

/**
 * Post Todo
 */
 export function createToDo(params) {
	return axios.post('http://todo-list.dev/wp-json/wp/v2/posts', {
		'title' : params.inputTitle.value,
		'content' : params.inputDescription.value,
		'categories' : params.inputCategories.value.split(','),
		'status': 'publish'
	}, {
		auth: {
			username: 'admin',
			password: '1234'
		},

		headers: { 'Content-Type' : 'application/json'}
	})
	.then(response => {

		return Promise.all([
	         axios.post('http://todo-list.dev/wp-json/acf/v2/post/' + response.data.id, {
				fields: {
					'priority' : params.inputPriority.value
				}
			}, {
				auth: {
					username: 'admin',
					password: '1234'
				},

				headers: { 'Content-Type' : 'application/json'}
			})
	      ]).then(results => {

			// Redirect to Home
			browserHistory.replace('/');

	        return;

	      });
	})
	.catch(function (error) {
		console.log(error);
	});
}


/**
 * Delete a ToDo
 */

 export function deleteTodo(toDoId) {
	return axios.delete('http://todo-list.dev/wp-json/wp/v2/posts/' + toDoId, {
			auth: {
				username: 'admin',
				password: '1234'
			}
		})
	.then(response => {
		store.dispatch(deleteToDoSuccess(toDoId));
		return response;
	});
}
