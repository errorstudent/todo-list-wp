import axios from 'axios';
import store from '../store';
import { getUserSuccess } from '../actions/user-actions';

/**
 * Get User
 */
export function getUser(todoId) {
  return axios.get('http://todo-list.dev/wp-json/wp/v2/users/1', {
    auth: {
      username: 'admin',
      password: '1234'
    }
  })
  .then(response => {
      store.dispatch(getUserSuccess(response.data));
      return response;
  });
}