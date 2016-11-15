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

	if(count($data->data['categories']) == 0) {
		$data->data['categories'] = [];
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

/**
 * Enqueue Scripts
 */
function my_enqueue_scripts() {
	wp_enqueue_script( 'app', get_template_directory_uri() . '/public/js/bundle.js', array(), false, true );
	wp_enqueue_style('bootstrap', get_stylesheet_directory_uri() . '/public/css/lib/bootstrap.min.css' );
	wp_enqueue_style('style', get_stylesheet_directory_uri() . '/public/css/styles.css' );

	wp_localize_script( 'app', 'WP_API_Settings', array(
		'base_url' => esc_url_raw( get_site_url() ),
		'endpoint' => esc_url_raw( get_rest_url() ),
		'nonce' => wp_create_nonce( 'wp_rest' ) )
	);
}
add_action( 'wp_enqueue_scripts', 'my_enqueue_scripts' );
