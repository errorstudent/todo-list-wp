## Getting Started


## Running The Backend WP
Firstly, set up the required WordPress installation:

- Make sure the project using local domain `todo-list.dev`. Set `todo-list.dev` on your `VirtualHost` apache.
- Import the Database `todo-list.sql` to your MySQL 


## Running The Frontend

To start, make sure you're in the `wp-content/themes/todolist-theme/` folder in command-line.

```sh
# Install Node Modules
npm install

# Start the Server Only
gulp

# If you want to start he Server and edit the react code, this rebuilds
gulp watch
```


Open the project in browser `http://localhost:3000`