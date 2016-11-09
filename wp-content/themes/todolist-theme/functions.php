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

/**
 * Enable CORS
 */
if (isset($_SERVER['HTTP_ORIGIN'])) {
	header("Access-Control-Allow-Origin: *");
	header('Access-Control-Allow-Credentials: true');    
	header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT, OPTIONS"); 
}   

 // Accept Cross Domain Transfer.
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
	if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
		header("Access-Control-Allow-Methods: GET, POST, DELETE, PUT, OPTIONS");         
	if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
		header("Access-Control-Allow-Headers:{$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
	exit(0);
}