<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'todo-list');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '`||pEv}-RR*k7<9zTZ!i8|Hrvw$kntR^V&k<fls,$ILERzatX~S_hP{E^k^2^^lz');
define('SECURE_AUTH_KEY',  '7+.F6A]]nJ{$`M{V7],:tx1?%lb-?X>NQp}cL8#}^ZEKeM]2:Xwahr48sWmsDwK/');
define('LOGGED_IN_KEY',    'ZbfyK_Buj%!A|plMWp68H(-^_x<T`[^*opKl8/vE+gHSS!3d^>4KZw~955V&WAjS');
define('NONCE_KEY',        'Yu|l5w?!ha$G&zAn,qMh>/ZwtmJ}O>{)Xc3;iV! %*.p~Ch/_!x:{*$<Ek3Y=v7^');
define('AUTH_SALT',        '(9.`]0^gLx$a.U{us~SSO`<x0ZP8@.5G.,X#X[IcqHwE%[XeY!3kEe{o?@X<PVT@');
define('SECURE_AUTH_SALT', ' E4QM`Z8w7]]@*eH;&wuLaG9D626L%F ePoq:3*4H#2DU}y^&ypG(CqmM~EOn.Qn');
define('LOGGED_IN_SALT',   'V7Vw:%/!qO{JE#~Ub-eq?%Hp>Wb8Zws W/l$0rl,DR`h[3A?8dd>dd887A4_4i8*');
define('NONCE_SALT',       'pXW`sPd_T,wl)3D<qN`]gva@F*E.~_Hg+w t%X%W3Buk/GS|)>F{XL#:%Bl7Ag1(');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
