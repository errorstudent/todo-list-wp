import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
	user: {}
};

const userReducer = function(state = initialState, action) {

	switch(action.type) {

		case types.GET_USER_SUCCESS:
		console.log(action.user);

		return Object.assign({}, state, { user: action.user });
	}

	return state;

}

export default userReducer;
