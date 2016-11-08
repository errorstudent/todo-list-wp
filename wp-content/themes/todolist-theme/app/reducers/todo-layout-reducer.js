import * as types from '../actions/action-types';

const initialState = {
  page: '',
  username: '',
  title: ''
};

const toDoLayoutReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.LOAD_TODO_LAYOUT:
      return Object.assign({}, state, {
        page: action.page,
        username: action.username,
        title: action.title
      });

  }

  return state;

}

export default toDoLayoutReducer;
