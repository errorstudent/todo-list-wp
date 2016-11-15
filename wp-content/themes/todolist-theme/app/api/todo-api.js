import WPAPI from 'wpapi';
import store from '../store';
import { browserHistory  } from 'react-router';
import { getToDosSuccess, deleteToDoSuccess, getToDoSuccess, createToDoSuccess } from '../actions/todo-actions';

var wp = new WPAPI({
	endpoint: window.WP_API_Settings.endpoint,
	nonce: window.WP_API_Settings.nonce
});


/**
 * Get All ToDo
 */
 export function getToDos() {
 	return wp.posts().get(function( err, data ) {
 		if ( err ) {
 			console.log(err);
 		}
 		store.dispatch(getToDosSuccess(data));
 		return data;
 	});
 }


/**
 * Get ToDo
 */
 export function getToDo(todoId) {
 	return wp.posts().id(todoId).get(function( err, data ) {
 		if ( err ) {
 			console.log(err);
 		}
 		store.dispatch(getToDoSuccess(data));
 		return data;
 	});
 }

/**
 * Post Todo
 */
 export function createToDo(params) {
 	wp.posts().create({
 		title : params.inputTitle.value,
 		content : params.inputDescription.value,
 		fields : {
 			priority : params.inputPriority.value
 		},
 		status: 'publish'
 	}).then(function( response ) {
 		let categories = params.inputCategories.value.split(',');
 		let catIds = new Array();

 		var promises = categories.map( function(name) { 
 			return new Promise(function(resolve, reject) {
 				wp.categories().search( name ).then(function(category) {
 					if(category.length > 0) {
 						category.map(function(cat) {
 							catIds.push(cat.id);
 						});
 					}else{
 						wp.categories().create({
 							name: name
 						}).then(function(result) {
 							catIds.push(result.id);
 						});
 					}

 					resolve();
 				}).catch(function( err ) {
 					return reject(err);
 				});
 			});
 		});

 		Promise.all(promises)
 		.then(function() { 
 			wp.posts(response.id).id(response.id).update({
 				categories: catIds	
 			}).then(function() {
 				browserHistory.replace('/');
 			});
 		})
 		.catch(console.error);
 	})
 }


/**
 * Delete a ToDo
 */
 export function deleteTodo(toDoId) {
 	return wp.posts().id( toDoId ).delete(function( err, data ) {
 		if ( err ) {
 			console.log(err);
 		}
 		store.dispatch(deleteToDoSuccess(toDoId));
 		return data;
 	});
 }
