import WPAPI from 'wpapi';
import store from '../store';
import { getUserSuccess } from '../actions/user-actions';

var wp = new WPAPI({
	endpoint: window.WP_API_Settings.endpoint,
	nonce: window.WP_API_Settings.nonce
});

/**
 * Get User
 */
 export function getUser(todoId) {
	return wp.users().me().get(function( err, data ) {
		if ( err ) {
			console.log(err);
			window.location = window.WP_API_Settings.base_url + '/wp-login.php?redirect_to=' + window.WP_API_Settings.base_url + '&reauth=1';
		}

		store.dispatch(getUserSuccess(data));
		return data;
	});
}