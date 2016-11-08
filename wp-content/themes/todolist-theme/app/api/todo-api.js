import axios from 'axios';
import store from '../store';
import { getToDosSuccess, deleteToDoSuccess, getToDoSuccess } from '../actions/todo-actions';

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
 export function postToDo() {
  return axios.post('http://todo-list.dev/wp-json/wp/v2/posts', {
    'title' : 'Fred simanjuntak eaa',
    'type': 'post'
  }, {
    auth: {
      username: 'admin',
      password: '1234'
    },

    headers: { 'Content-Type' : 'application/x-www-form-urlencoded;application/json'}
  })
  .then(response => {
    console.log(response);
    //store.dispatch(getUserSuccess(response.data));
    return response;
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
