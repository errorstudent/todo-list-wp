## Getting Started

Firstly, set up the required WordPress installation:

- Set the project using local domain `todo-list.dev`
- Import the Database `todo-list.sql` to your MySQL 

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

Open the project in browser `http://localhost:3000`
