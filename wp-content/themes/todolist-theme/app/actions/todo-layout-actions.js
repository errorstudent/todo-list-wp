import * as types from '../actions/action-types';

export function loadToDoLayout(page, title, username) {
  return {
    type: types.LOAD_TODO_LAYOUT,
    page,
    title,
    username
  };
}
