import { combineReducers } from 'redux';

// Reducers
import userReducer from './user-reducer';
import toDoReducer from './todo-reducer';
import toDoLayoutReducer from './todo-layout-reducer';

// Combine Reducers
var reducers = combineReducers({
    toDoState: toDoReducer,
    userState: userReducer,
    toDoLayoutState: toDoLayoutReducer
});

export default reducers;
