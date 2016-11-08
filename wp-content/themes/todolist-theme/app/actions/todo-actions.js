import * as types from '../actions/action-types';

export function getToDosSuccess(todos) {
  return {
    type: types.GET_TODOS_SUCCESS,
    todos
  };
}

export function deleteToDoSuccess(toDoId) {
  return {
    type: types.DELETE_TODO_SUCCESS,
    toDoId
  };
}

export function getToDoSuccess(todo) {
  return {
    type: types.GET_TODO_SUCCESS,
    todo
  };
}
