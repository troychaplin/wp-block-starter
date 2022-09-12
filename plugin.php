<?php

/**
 * Plugin Name:       Wp Block Starter
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       wp-block-starter
 *
 * @package           create-block
 */

// Register custom blocks
function create_block_wp_block_starter_block_init()
{
    register_block_type(__DIR__ . '/build/example-one');
    register_block_type(__DIR__ . '/build/text-box');
}
add_action('init', 'create_block_wp_block_starter_block_init');

// Enqueue block script
function load_block_scripts($hook)
{
    wp_enqueue_script(
        'block-script',
        plugin_dir_url(__FILE__) . 'assets/block-script.js',
        array('wp-blocks')
    );
}
add_action('admin_enqueue_scripts', 'load_block_scripts');
