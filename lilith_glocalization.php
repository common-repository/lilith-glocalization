<?php
/*
Plugin Name: Lilith Glocalization
Plugin URI: http://glocalization.384400.com/
Description: Lilith Glocalization is a simple and universal way to display a website in multiple languages. See http://glocalization.384400.com/ for help.
Version: 1.0
Author: William Top
Author URI: http://glocalization.384400.com/
License: GPL2
*/
if ( ! function_exists( 'lilith_glocalization' ) ) {
	function lilith_glocalization() {
		wp_enqueue_style( 'lilith-glocalization', plugins_url('g11n.css', __FILE__) );
		wp_register_script( 'lilith-glocalization', plugins_url('g11n.js', __FILE__), array( 'jquery' ), NULL, true );
		wp_enqueue_script( 'lilith-glocalization' );
	}
	add_action( 'wp_enqueue_scripts', 'lilith_glocalization' );
}