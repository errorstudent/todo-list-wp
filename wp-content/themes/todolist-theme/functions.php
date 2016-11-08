<?php
/**
 * Modification Endpoint WP API
 */
add_filter( 'rest_prepare_post', 'custom_endpoint_wp_api', 10, 3 );
function custom_endpoint_wp_api( $data, $post, $request ) {

	// Remove default Categories Fields
	unset($data->data['categories']);

	// Add field Categories
	$cats = get_the_category($post->ID);
	foreach($cats as $cd){
	    $data->data['categories'][] =$cd->cat_name;
	}
    return $data;
}
