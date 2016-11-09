import * as types from '../actions/action-types';
import _ from 'lodash';


const initialState = {
	todos: [],
	todo: {
		id: '',
		title: {
			rendered: ''
		},
		content: {
			rendered: ''
		},
		categories: [],
		acf: {
			priority: ''
		}
	}
};

const toDoReducer = function(state = initialState, action) {

	switch(action.type) {

		case types.GET_TODOS_SUCCESS:
			return Object.assign({}, state, { todos: action.todos });

		case types.GET_TODO_SUCCESS:
			return Object.assign({}, state, { todo: action.todo });

		case types.CREATE_TODO_SUCCESS:
			const newToDo = _.extend(state.todos, [action.todo]);
			console.log(newToDo);
			return Object.assign({}, state, { todos : newToDo });

		case types.DELETE_TODO_SUCCESS:
		
			// Use lodash to create a new user array without the user we want to remove
			const newToDos = _.filter(state.todos, todo => todo.id != action.toDoId);
			return Object.assign({}, state, { todos: newToDos });

	}

	return state;

}

export default toDoReducer;
