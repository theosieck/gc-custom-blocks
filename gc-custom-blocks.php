<?php
/**
 * Plugin Name: GC Custom Blocks
 * Description: Creates custom blocks for Global Cognition.
 * Author: Jorie Sieck
 * Version: 0.2
 * @package jsforwphowto
 */

 // don't load if accessed directly or gutenberg unavailable
 defined('ABSPATH') || exit;
 if(!function_exists('register_block_type')) {
	 return;
 }

 // enqueue block editor only scripts
 add_action('enqueue_block_editor_assets','gc_custom_blocks_editor_scripts');
 function gc_custom_blocks_editor_scripts() {
	$block_path = '/assets/js/editor.blocks.js';
	wp_enqueue_script(
		'gc-custom-blocks-js',
		plugins_url($block_path, __FILE__),
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor' ],
    filemtime( plugin_dir_path(__FILE__) . $block_path )
	);
}

// enqueue front end and editor js and css
add_action('enqueue_block_assets','gc_custom_block_scripts');
function gc_custom_block_scripts() {
	$block_path = '/assets/js/frontend.blocks.js';
	$style_path = '/assets/css/blocks.style.css';
	wp_enqueue_script(
		'gc-custom-blocks-frontend-js',
		plugins_url($block_path, __FILE__),
		[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-api', 'wp-editor' ],
    filemtime( plugin_dir_path(__FILE__) . $block_path )
	);
	wp_enqueue_style(
		'gc-custom-blocks-css',
		plugins_url($style_path, __FILE__),
		null,
		filemtime(plugin_dir_path(__FILE__) . $style_path)
	);
}
