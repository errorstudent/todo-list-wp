## Getting Started

Firstly, set up the required WordPress installation:

- Import Example Post and Custom Field from `todolistapp.wordpress.2016-11-07.xml` using Wordpress Importer Tools
- Set your permalink structure to "Day and name" (e.g., `http://dev.wp/2015/11/23/sample-post/`).

Enter to directory `wp-content/themes/todo-list-theme/` and run:

```npm install```

Create a new file `src/wp-url.js` with the following code:

```
export const WP_URL = '<{URL of your blog}/wp-json/wp/v2';
```

to match your WordPress URL address. For example:

```
export const WP_URL = 'http://todo-list.dev/wp-json/wp/v2';
```

Switch back to your terminal app and run:

```
npm start
```

in the theme's main directory. That will start Webpack dev server on `localhost:3000` and bundle the app into the `dist/` folder. In case we are already using the port `3000`.

Open from browser `http://localhost:3000`
